// Usage: set environment variable VERCEL_TOKEN and run:
//   node scripts/vercel-mcp-demo.js

// Simple demo script that calls Vercel REST API to list projects and deployments.
// This is safe to run locally — it reads the token from process.env.VERCEL_TOKEN.

const base = 'https://api.vercel.com';

async function api(path, method = 'GET', body) {
  const token = process.env.VERCEL_TOKEN;
  if (!token) {
    console.error('Missing VERCEL_TOKEN environment variable. Create a token at https://vercel.com/account/tokens');
    process.exit(1);
  }

  const res = await fetch(base + path, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const text = await res.text();
  let data;
  try { data = JSON.parse(text); } catch (e) { data = text; }
  if (!res.ok) {
    console.error('Vercel API error', res.status, data);
    process.exit(1);
  }
  return data;
}

async function listProjects() {
  console.log('Listing Vercel projects...');
  const projects = await api('/v9/projects');
  if (projects && projects.projects) {
    projects.projects.forEach(p => console.log(`- ${p.name} (id: ${p.id})`));
  } else {
    console.log(projects);
  }
}

async function listDeployments(projectId) {
  console.log('\nListing deployments for projectId:', projectId);
  const deployments = await api(`/v6/deployments?projectId=${projectId}`);
  if (deployments && deployments.deployments) {
    deployments.deployments.slice(0,10).forEach(d => console.log(`- ${d.url} (${d.state}) id=${d.uid}`));
  } else {
    console.log(deployments);
  }
}

async function main() {
  await listProjects();

  // If you want to list deployments for a specific project, set PROJECT_ID env:
  const projectId = process.env.PROJECT_ID;
  if (projectId) await listDeployments(projectId);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
