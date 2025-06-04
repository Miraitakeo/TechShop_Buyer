import PageBreadcrumb from "../common/PageBreadCrumb";
import ComponentCard from "../common/ComponentCard";
import PageMeta from "../common/PageMeta";
import ViewPendingSupplierTableOne from "../tables/ViewPendingSupplierTables/ViewPendingSupplierTableOne";
export default function ViewPendingSupplierTables() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Supplier Request " />
      <div className="space-y-6">
        <ComponentCard title="Pending Table">
          <ViewPendingSupplierTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
