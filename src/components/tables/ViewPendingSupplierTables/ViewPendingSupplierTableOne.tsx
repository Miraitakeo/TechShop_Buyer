import { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import Badge from "../../ui/badge/Badge";

interface Profile {
  id: number;
  businessName: string;
  email: string;
  contactInfo: string;
  verificationStatus: "Verified" | "Pending" | "Rejected";
  businessLicense: string;
  bankDetails: string;
}

const supplierData: Profile[] = [
  {
    id: 1,
    businessName: "Tech Supplies Ltd.",
    email: "contact@techsupplies.com",
    contactInfo: "+123 456 7890",
    verificationStatus: "Pending",
    businessLicense: "123-456-789",
    bankDetails: "Tech Bank, Account: 9876543210"
  },
  {
    id: 2,
    businessName: "Green Solutions",
    email: "info@greensolutions.com",
    contactInfo: "+987 654 3210",
    verificationStatus: "Pending",
    businessLicense: "987-654-321",
    bankDetails: "Green Bank, Account: 1234567890"
  }
];

const ViewPendingSupplierTableOne = () => {
  const [suppliers, setSuppliers] = useState<Profile[]>(supplierData);

  const handleVerificationChange = (id: number, newStatus: "Verified" | "Pending" | "Rejected") => {
    setSuppliers((prevSuppliers) =>
      prevSuppliers.map((supplier) =>
        supplier.id === id ? { ...supplier, verificationStatus: newStatus } : supplier
      )
    );
  };

  return (
    <div className="p-6">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Business Name</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Email</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Verification Status</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Action</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {suppliers.length > 0 ? (
                suppliers.map((supplier) => (
                  <TableRow key={supplier.id}>
                    <TableCell className="px-5 py-4 sm:px-6 text-start">
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">{supplier.businessName}</span>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{supplier.email}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                      <Badge
                        size="sm"
                        color={supplier.verificationStatus === "Verified" ? "success" : supplier.verificationStatus === "Pending" ? "warning" : "error"}
                      >
                        {supplier.verificationStatus}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-start">
                      <button onClick={() => handleVerificationChange(supplier.id, "Verified")} className="mr-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">Verify</button>
                      <button onClick={() => handleVerificationChange(supplier.id, "Rejected")} className="mr-2 px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">Reject</button>
                      <button onClick={() => handleVerificationChange(supplier.id, "Pending")} className="px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600">Set Pending</button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    No pending requests
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

export default ViewPendingSupplierTableOne;