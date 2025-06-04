import PageBreadcrumb from "../common/PageBreadCrumb";
import ComponentCard from "../common/ComponentCard";
import PageMeta from "../common/PageMeta";
import ViewProfileTableOne from "../tables/ViewProfileTables/ViewProfileTableOne";
export default function ViewProfileTables() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Supplier Profile" />
      <div className="space-y-6">
        <ComponentCard title="View Supplier Profile">
          <ViewProfileTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
