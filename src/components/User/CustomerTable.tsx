import PageBreadcrumb from "../common/PageBreadCrumb";
import ComponentCard from "../common/ComponentCard";
import PageMeta from "../common/PageMeta";
import CustomerTableOne from "../tables/CustomerTables/CustomerTableOne";
export default function CustomerTables() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Customer " />
      <div className="space-y-6">
        <ComponentCard title="Manage Customer">
          <CustomerTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
