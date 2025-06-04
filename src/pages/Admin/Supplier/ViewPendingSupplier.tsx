import PageMeta from "../../../components/common/PageMeta";
import ViewPendingSupplierTables from "../../../components/Supplier/ViewPendingSupplierTables";

export default function ViewPendingSupplier() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />

      <ViewPendingSupplierTables />
    </>
  );
}
