import { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import Badge from "../../ui/badge/Badge";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  status: string;
}

const products: Product[] = [
  { id: 1, name: "Laptop", category: "Electronics", price: "$999", status: "Available" },
  { id: 2, name: "Smartphone", category: "Electronics", price: "$599", status: "Out of Stock" },
  { id: 3, name: "Desk Chair", category: "Furniture", price: "$199", status: "Available" },
  { id: 4, name: "Wireless Mouse", category: "Accessories", price: "$49", status: "Limited Stock" },
];

const NewProductTableOne = () => {
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">

          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 mb-4 border border-gray-300 dark:border-gray-600 rounded mx-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-700 dark:text-gray-300 text-start">ID</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-700 dark:text-gray-300 text-start">Name</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-700 dark:text-gray-300 text-start">Category</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-700 dark:text-gray-300 text-start">Price</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-700 dark:text-gray-300 text-start">Status</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="px-5 py-4 sm:px-6 text-start font-medium text-gray-900 dark:text-white">{product.id}</TableCell>
                    <TableCell className="px-5 py-4 text-start font-medium text-gray-900 dark:text-white">{product.name}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-700 dark:text-gray-300 text-start">{product.category}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-700 dark:text-gray-300 text-start">{product.price}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-700 dark:text-gray-300 text-start">
                      <Badge size="sm" color={product.status === "Available" ? "success" : "warning"}>
                        {product.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <td colSpan={5} className="text-center py-4 text-gray-700 dark:text-gray-300">
                    No products found
                  </td>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

  );
};

export default NewProductTableOne;
