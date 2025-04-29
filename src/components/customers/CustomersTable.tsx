
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Sample data for customers
const customers = [
  {
    id: "CUS-001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    status: "Active",
    joinDate: "Apr 23, 2025",
    orders: 12
  },
  {
    id: "CUS-002",
    name: "Sarah Johnson",
    email: "sarah.j@example.com",
    phone: "+1 (555) 987-6543",
    status: "Active",
    joinDate: "Mar 15, 2025",
    orders: 8
  },
  {
    id: "CUS-003",
    name: "Michael Brown",
    email: "michael.b@example.com",
    phone: "+1 (555) 456-7890",
    status: "Inactive",
    joinDate: "Feb 28, 2025",
    orders: 3
  },
  {
    id: "CUS-004",
    name: "Emma Wilson",
    email: "emma.w@example.com",
    phone: "+1 (555) 234-5678",
    status: "Active",
    joinDate: "Jan 12, 2025",
    orders: 15
  },
  {
    id: "CUS-005",
    name: "David Lee",
    email: "david.l@example.com",
    phone: "+1 (555) 876-5432",
    status: "Active",
    joinDate: "Mar 30, 2025",
    orders: 6
  }
];

export default function CustomersTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Join Date</TableHead>
            <TableHead>Orders</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">{customer.id}</TableCell>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell>
                <Badge variant={customer.status === "Active" ? "default" : "secondary"}>
                  {customer.status}
                </Badge>
              </TableCell>
              <TableCell>{customer.joinDate}</TableCell>
              <TableCell>{customer.orders}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
