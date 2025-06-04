import { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import Badge from "../../ui/badge/Badge";

interface Role {
  id: number;
  roleName: string;
  permissions: string[];
  status: "Active" | "Inactive";
}

const roleData: Role[] = [
  {
    id: 1,
    roleName: "Admin",
    permissions: ["Manage Users", "View Reports", "Edit Settings"],
    status: "Active",
  },
  {
    id: 2,
    roleName: "Supplier",
    permissions: ["Manage Products", "View Orders"],
    status: "Active",
  },
  {
    id: 3,
    roleName: "Viewer",
    permissions: ["View Reports"],
    status: "Inactive",
  },
];

const ManageRollTableOne = () => {
  const [roles, setRoles] = useState<Role[]>(roleData);

  const handleDelete = (id: number) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Add New Role</button>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Role Name</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Permissions</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Status</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {roles.length > 0 ? (
                roles.map((role) => (
                  <TableRow key={role.id}>
                    <TableCell className="px-5 py-4 text-start font-medium text-gray-800 dark:text-white/90">{role.roleName}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">{role.permissions.join(", ")}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">
                      <Badge size="sm" color={role.status === "Active" ? "success" : "error"}>{role.status}</Badge>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-start">
                      <button className="mr-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">Edit</button>
                      <button onClick={() => handleDelete(role.id)} className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">Delete</button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    No roles available
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

export default ManageRollTableOne;