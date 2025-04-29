
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Sample data for products
const products = [
  {
    id: "PRD-001",
    name: "Premium Wireless Headphones",
    category: "Electronics",
    price: "$149.99",
    stock: 45,
    status: "In Stock",
    created: "Apr 15, 2025"
  },
  {
    id: "PRD-002",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: "$249.99",
    stock: 23,
    status: "In Stock",
    created: "Mar 22, 2025"
  },
  {
    id: "PRD-003",
    name: "Smart Fitness Tracker",
    category: "Wearables",
    price: "$89.99",
    stock: 0,
    status: "Out of Stock",
    created: "Feb 18, 2025"
  },
  {
    id: "PRD-004",
    name: "Professional Digital Camera",
    category: "Photography",
    price: "$899.99",
    stock: 12,
    status: "In Stock",
    created: "Jan 30, 2025"
  },
  {
    id: "PRD-005",
    name: "Stainless Steel Water Bottle",
    category: "Kitchen",
    price: "$24.99",
    stock: 78,
    status: "In Stock",
    created: "Apr 03, 2025"
  }
];

export default function ProductsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Created</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <Badge variant={product.status === "In Stock" ? "default" : "secondary"}>
                  {product.status}
                </Badge>
              </TableCell>
              <TableCell>{product.created}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
