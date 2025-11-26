export const metadata = {
  title: 'Losos 4',
  description: 'Next.js app scaffolded by Trae AI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}