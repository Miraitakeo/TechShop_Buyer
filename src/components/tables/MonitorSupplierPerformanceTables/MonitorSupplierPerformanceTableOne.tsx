import { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import Badge from "../../ui/badge/Badge";

interface SupplierPerformance {
  id: number;
  businessName: string;
  totalSales: number;
  orderFulfillmentRate: number;
  customerRating: number;
  disputes: number;
}

const supplierPerformanceData: SupplierPerformance[] = [
  {
    id: 1,
    businessName: "Tech Supplies Ltd.",
    totalSales: 5000,
    orderFulfillmentRate: 98,
    customerRating: 4.7,
    disputes: 2,
  },
  {
    id: 2,
    businessName: "Green Solutions",
    totalSales: 3000,
    orderFulfillmentRate: 92,
    customerRating: 4.5,
    disputes: 5,
  },
];

const MonitorSupplierPerformanceTableOne = () => {
  const [suppliers] = useState<SupplierPerformance[]>(supplierPerformanceData);

  return (
    <div className="p-6">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Business Name</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Total Sales ($)</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Order Fulfillment (%)</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Customer Rating</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Disputes</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {suppliers.length > 0 ? (
                suppliers.map((supplier) => (
                  <TableRow key={supplier.id}>
                    <TableCell className="px-5 py-4 sm:px-6 text-start font-medium text-gray-800 dark:text-white/90">
                      {supplier.businessName}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">${supplier.totalSales.toLocaleString()}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">
                      <Badge size="sm" color={supplier.orderFulfillmentRate > 95 ? "success" : "warning"}>
                        {supplier.orderFulfillmentRate}%
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">
                      ⭐ {supplier.customerRating.toFixed(1)}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">
                      <Badge size="sm" color={supplier.disputes > 3 ? "error" : "success"}>
                        {supplier.disputes}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
                    No performance data available
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

export default MonitorSupplierPerformanceTableOne;
