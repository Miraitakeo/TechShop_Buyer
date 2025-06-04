import { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table"; 
import Badge from "../../ui/badge/Badge"; 

interface User {
  id: number;
  name: string;
  email: string;
  status: "Active" | "Suspended" | "Banned";
}

const userData: User[] = [
  { id: 1, name: "Lindsey Curtis", email: "lindsey@domain.com", status: "Active" },
  { id: 2, name: "Kaiya George", email: "kaiya@domain.com", status: "Active" },
  { id: 3, name: "Zain Geidt", email: "zain@domain.com", status: "Suspended" },
  { id: 4, name: "Carla George", email: "carla@domain.com", status: "Banned" },
];

const CustomerTableOne = () => {
  const [users, setUsers] = useState(userData);

  const handleStatusChange = (id: number, newStatus: "Active" | "Suspended" | "Banned") => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: newStatus } : user
      )
    );
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Name</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Email</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Status</TableCell>
              <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Action</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">{user.name}</span>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{user.email}</TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={user.status === "Active" ? "success" : user.status === "Suspended" ? "warning" : "error"}
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  <button onClick={() => handleStatusChange(user.id, "Suspended")} className="mr-2 px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600">Suspend</button>
                  <button onClick={() => handleStatusChange(user.id, "Banned")} className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">Ban</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CustomerTableOne;
