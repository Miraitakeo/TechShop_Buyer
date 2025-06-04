import PageMeta from "../../../components/common/PageMeta";
import ViewAllOrderTable from "../../../components/Order/VeiwAllOrderTable";

export default function ViewAllOrder() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />

      <ViewAllOrderTable />
    </>
  );
}
