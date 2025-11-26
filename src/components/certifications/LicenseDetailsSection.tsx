import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const licenses = [
    {
        name: "Engr. David Okon",
        role: "Principal Partner",
        cert: "COREN Registered Engineer",
        regNo: "R.12345",
        status: "Active",
    },
    {
        name: "Engr. David Okon",
        role: "Principal Partner",
        cert: "NSE Fellow",
        regNo: "F.00123",
        status: "Active",
    },
    {
        name: "Engr. Sarah Adebayo",
        role: "Head of Electrical",
        cert: "COREN Registered Engineer",
        regNo: "R.67890",
        status: "Active",
    },
    {
        name: "Michael Johnson",
        role: "Project Lead",
        cert: "PMP Certification",
        regNo: "PMP-1234567",
        status: "Active",
    },
    {
        name: "Engr. Musa Ibrahim",
        role: "Senior Mechanical Eng.",
        cert: "ASHRAE Member",
        regNo: "M-98765",
        status: "Active",
    },
];

export function LicenseDetailsSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container">
                <h2 className="text-2xl font-bold mb-8">Professional Licenses & Memberships</h2>
                <div className="bg-background rounded-xl border shadow-sm overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Certification</TableHead>
                                <TableHead>Registration No.</TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {licenses.map((license, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{license.name}</TableCell>
                                    <TableCell>{license.role}</TableCell>
                                    <TableCell>{license.cert}</TableCell>
                                    <TableCell className="font-mono text-xs">{license.regNo}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                            {license.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </section>
    );
}
