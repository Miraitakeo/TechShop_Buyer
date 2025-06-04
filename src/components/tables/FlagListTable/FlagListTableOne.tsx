import { useState } from "react";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "../../ui/table";
import Badge from "../../ui/badge/Badge";

interface Listing {
  id: number;
  listingName: string;
  flaggedReason: string;
  status: "Flagged" | "Reviewed";
}

const listingData: Listing[] = [
  {
    id: 1,
    listingName: "Fake Product 1",
    flaggedReason: "Misleading description",
    status: "Flagged",
  },
  {
    id: 2,
    listingName: "Fake Product 2",
    flaggedReason: "Incorrect pricing",
    status: "Reviewed",
  },
  {
    id: 3,
    listingName: "Fake Product 3",
    flaggedReason: "False advertising",
    status: "Flagged",
  },
];

const FlagListTableOne = () => {
  const [listings, setListings] = useState<Listing[]>(listingData);

  const handleDelete = (id: number) => {
    setListings(listings.filter((listing) => listing.id !== id));
  };

  const handleReview = (id: number) => {
    setListings(
      listings.map((listing) =>
        listing.id === id ? { ...listing, status: "Reviewed" } : listing
      )
    );
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Add New Listing</button>
      </div>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Listing Name</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Flagged Reason</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Status</TableCell>
                <TableCell isHeader className="px-5 py-3 font-medium text-gray-500 text-start">Actions</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {listings.length > 0 ? (
                listings.map((listing) => (
                  <TableRow key={listing.id}>
                    <TableCell className="px-5 py-4 text-start font-medium text-gray-800 dark:text-white/90">{listing.listingName}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">{listing.flaggedReason}</TableCell>
                    <TableCell className="px-4 py-3 text-gray-500 text-start dark:text-gray-400">
                      <Badge size="sm" color={listing.status === "Flagged" ? "error" : "success"}>{listing.status}</Badge>
                    </TableCell>
                    <TableCell className="px-4 py-3 text-start">
                      <button onClick={() => handleReview(listing.id)} className="mr-2 px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600">Review</button>
                      <button onClick={() => handleDelete(listing.id)} className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600">Delete</button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <td colSpan={4} className="text-center py-4 text-gray-500">
                    No flagged listings available
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

export default FlagListTableOne;
