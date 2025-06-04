import PageMeta from "../../../components/common/PageMeta";
import ViewProfileTables from "../../../components/Supplier/ViewProfileTables";

export default function ViewProfile() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />

      <ViewProfileTables />
    </>
  );
}
