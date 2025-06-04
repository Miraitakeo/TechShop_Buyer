import { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import Badge from "../../ui/badge/Badge";
import Button from "../../ui/button/Button";

interface ProductApproval {
  id: number;
  productName: string;
  supplierName: string;
  category: string;
  price: number;
  status: "Pending" | "Approved" | "Rejected";
}

const productApprovalData: ProductApproval[] = [
  { id: 1, productName: "Wireless Mouse", supplierName: "Tech Supplies Ltd.", category: "Electronics", price: 25, status: "Pending" },
  { id: 2, productName: "Organic Shampoo", supplierName: "Green Solutions", category: "Beauty", price: 15, status: "Pending" },
];

const ApproveRejectProductsTableOne = () => {
  const [products, setProducts] = useState<ProductApproval[]>(productApprovalData);

  const handleAction = (id: number, action: "Approved" | "Rejected") => {
    setProducts(products.map(product => product.id === id ? { ...product, status: action } : product));
  };

  return (
    <div className="p-6">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Product Name</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Supplier</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Category</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Price ($)</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Status</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {products.length > 0 ? (
                products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="px-5 py-4 sm:px-6 text-start font-medium text-gray-800 dark:text-white/90">
                      {product.productName}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">{product.supplierName}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">{product.category}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">${product.price.toFixed(2)}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">
                      <Badge size="sm" color={product.status === "Approved" ? "success" : product.status === "Rejected" ? "error" : "warning"}>
                        {product.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400 flex gap-2">
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md" onClick={() => handleAction(product.id, "Approved")}>
                        Approve
                      </Button>
                      <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md" onClick={() => handleAction(product.id, "Rejected")}>
                        Reject
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <td colSpan={6} className="text-center py-4 text-gray-500">
                    No products available
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

export default ApproveRejectProductsTableOne;
