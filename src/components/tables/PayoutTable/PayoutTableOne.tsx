import { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import Badge from "../../ui/badge/Badge";

interface Payout {
  id: number;
  supplierName: string;
  amount: number;
  status: "Pending" | "Completed";
}

const payoutData: Payout[] = [
  {
    id: 1,
    supplierName: "Supplier A",
    amount: 500,
    status: "Pending",
  },
  {
    id: 2,
    supplierName: "Supplier B",
    amount: 1200,
    status: "Completed",
  },
  {
    id: 3,
    supplierName: "Supplier C",
    amount: 750,
    status: "Pending",
  },
];

const PayoutTableOne = () => {
  const [payouts, setPayouts] = useState<Payout[]>(payoutData);

  const handleUpdatePayout = (id: number, status: "Pending" | "Completed") => {
    setPayouts((prevPayouts) =>
      prevPayouts.map((payout) =>
        payout.id === id ? { ...payout, status } : payout
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Add New Payout</button>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Supplier Name</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Amount</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Status</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {payouts.length > 0 ? (
                payouts.map((payout) => (
                  <TableRow key={payout.id}>
                    <TableCell className="px-5 py-4 text-start font-medium text-gray-800 dark:text-white/90">{payout.supplierName}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">${payout.amount}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">
                      <Badge size="sm" color={payout.status === "Completed" ? "success" : "warning"}>{payout.status}</Badge>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-start">
                      <button onClick={() => handleUpdatePayout(payout.id, "Completed")} className="mr-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">Mark as Completed</button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    No payouts available
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

export default PayoutTableOne;