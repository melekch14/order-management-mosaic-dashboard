
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

type OrderStatus = 'completed' | 'processing' | 'cancelled';

type Order = {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: OrderStatus;
  paymentMethod: string;
};

const mockOrders: Order[] = [
  {
    id: 'ORD-7391',
    customer: 'Sarah Johnson',
    date: '2023-05-15',
    total: 125.99,
    status: 'completed',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'ORD-7392',
    customer: 'Michael Chen',
    date: '2023-05-16',
    total: 89.5,
    status: 'processing',
    paymentMethod: 'PayPal',
  },
  {
    id: 'ORD-7393',
    customer: 'Emily Rodriguez',
    date: '2023-05-16',
    total: 245.0,
    status: 'completed',
    paymentMethod: 'Credit Card',
  },
  {
    id: 'ORD-7394',
    customer: 'John Smith',
    date: '2023-05-17',
    total: 35.75,
    status: 'cancelled',
    paymentMethod: 'Debit Card',
  },
  {
    id: 'ORD-7395',
    customer: 'Lisa Wong',
    date: '2023-05-17',
    total: 182.3,
    status: 'processing',
    paymentMethod: 'Credit Card',
  },
];

const statusStyles = {
  completed: 'bg-green-50 text-dashboard-green',
  processing: 'bg-blue-50 text-dashboard-blue',
  cancelled: 'bg-red-50 text-dashboard-red',
};

export default function RecentOrdersTable() {
  const [orders] = useState<Order[]>(mockOrders);

  return (
    <div className="rounded-lg border border-dashboard-border-light bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-dashboard-border-light p-4">
        <h2 className="text-lg font-medium">Recent Orders</h2>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead className="w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <span
                    className={cn(
                      'inline-block rounded-full px-2 py-1 text-xs font-medium capitalize',
                      statusStyles[order.status]
                    )}
                  >
                    {order.status}
                  </span>
                </TableCell>
                <TableCell>{order.paymentMethod}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Update status</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
