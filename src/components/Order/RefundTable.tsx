import PageBreadcrumb from "../common/PageBreadCrumb";
import ComponentCard from "../common/ComponentCard";
import PageMeta from "../common/PageMeta";
import RefundTableOne from "../tables/RefundTable/RefundTableOne";
export default function MonitorSupplierPerformanceTables() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Handle Refunds" />
      <div className="space-y-6">
        <ComponentCard title="Refund">
          <RefundTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
