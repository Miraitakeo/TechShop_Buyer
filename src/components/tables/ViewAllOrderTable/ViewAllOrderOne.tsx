import { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import Badge from "../../ui/badge/Badge";

interface Order {
  id: number;
  orderId: string;
  customerName: string;
  totalAmount: number;
  status: "Pending" | "Shipped" | "Delivered";
}

const orderData: Order[] = [
  {
    id: 1,
    orderId: "ORD12345",
    customerName: "John Doe",
    totalAmount: 120.5,
    status: "Pending",
  },
  {
    id: 2,
    orderId: "ORD12346",
    customerName: "Jane Smith",
    totalAmount: 85.0,
    status: "Shipped",
  },
  {
    id: 3,
    orderId: "ORD12347",
    customerName: "Sam Johnson",
    totalAmount: 50.0,
    status: "Delivered",
  },
];

const ViewAllOrderTableOne = () => {
  const [orders, setOrders] = useState<Order[]>(orderData);

  const handleDelete = (id: number) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  const handleStatusChange = (id: number, newStatus: "Shipped" | "Delivered") => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Add New Order</button>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Order ID</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Customer Name</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Total Amount</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Status</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {orders.length > 0 ? (
                orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="px-5 py-4 text-start font-medium text-gray-800 dark:text-white/90">{order.orderId}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">{order.customerName}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">${order.totalAmount.toFixed(2)}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">
                      <Badge size="sm" color={order.status === "Pending" ? "warning" : order.status === "Shipped" ? "info" : "success"}>{order.status}</Badge>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-start">
                      {order.status === "Pending" && (
                        <button onClick={() => handleStatusChange(order.id, "Shipped")} className="mr-2 px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600">Mark as Shipped</button>
                      )}
                      {order.status === "Shipped" && (
                        <button onClick={() => handleStatusChange(order.id, "Delivered")} className="mr-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">Mark as Delivered</button>
                      )}
                      <button onClick={() => handleDelete(order.id)} className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">Delete</button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
                    No orders available
                  </td>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ViewAllOrderTableOne;
