
import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MoreHorizontal } from 'lucide-react';

export type OrderStatus = 'delivered' | 'processing' | 'cancelled' | 'pending';

type Order = {
  id: string;
  customer: string;
  date: string;
  total: number;
  status: OrderStatus;
  paymentMethod: string;
  items: number;
};

const mockOrders: Order[] = [
  {
    id: 'ORD-7391',
    customer: 'Sarah Johnson',
    date: '2023-05-15',
    total: 125.99,
    status: 'delivered',
    paymentMethod: 'Credit Card',
    items: 3,
  },
  {
    id: 'ORD-7392',
    customer: 'Michael Chen',
    date: '2023-05-16',
    total: 89.5,
    status: 'processing',
    paymentMethod: 'PayPal',
    items: 2,
  },
  {
    id: 'ORD-7393',
    customer: 'Emily Rodriguez',
    date: '2023-05-16',
    total: 245.0,
    status: 'delivered',
    paymentMethod: 'Credit Card',
    items: 5,
  },
  {
    id: 'ORD-7394',
    customer: 'John Smith',
    date: '2023-05-17',
    total: 35.75,
    status: 'cancelled',
    paymentMethod: 'Debit Card',
    items: 1,
  },
  {
    id: 'ORD-7395',
    customer: 'Lisa Wong',
    date: '2023-05-17',
    total: 182.3,
    status: 'processing',
    paymentMethod: 'Credit Card',
    items: 4,
  },
  {
    id: 'ORD-7396',
    customer: 'David Miller',
    date: '2023-05-18',
    total: 76.25,
    status: 'pending',
    paymentMethod: 'PayPal',
    items: 2,
  },
  {
    id: 'ORD-7397',
    customer: 'Jessica Taylor',
    date: '2023-05-18',
    total: 129.99,
    status: 'delivered',
    paymentMethod: 'Credit Card',
    items: 3,
  },
  {
    id: 'ORD-7398',
    customer: 'Kevin Brown',
    date: '2023-05-19',
    total: 54.50,
    status: 'pending',
    paymentMethod: 'Debit Card',
    items: 1,
  },
];

const statusStyles: Record<OrderStatus, string> = {
  delivered: 'bg-green-50 text-dashboard-green',
  processing: 'bg-blue-50 text-dashboard-blue',
  cancelled: 'bg-red-50 text-dashboard-red',
  pending: 'bg-yellow-50 text-dashboard-yellow',
};

export default function OrdersTable() {
  const [orders] = useState<Order[]>(mockOrders);

  return (
    <div className="rounded-lg border border-dashboard-border-light bg-white shadow-sm">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead className="w-10"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="cursor-pointer hover:bg-dashboard-bg-light">
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.items}</TableCell>
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
                      <DropdownMenuItem>View order</DropdownMenuItem>
                      <DropdownMenuItem>Edit order</DropdownMenuItem>
                      <DropdownMenuItem>Delete order</DropdownMenuItem>
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
