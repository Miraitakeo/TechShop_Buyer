import PageBreadcrumb from "../common/PageBreadCrumb";
import ComponentCard from "../common/ComponentCard";
import PageMeta from "../common/PageMeta";
import ProductApprovalTableOne from "../tables/ProductApprovalTable/ProductApprovalTableOne";

export default function ProductApprovalTable() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Manage " />
      <div className="space-y-6">
        <ComponentCard title="Role">
          <ProductApprovalTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
