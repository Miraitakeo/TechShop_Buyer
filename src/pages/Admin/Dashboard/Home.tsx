import EcommerceMetrics from "../../../components/ecommerce/EcommerceMetrics";
import MonthlySalesChart from "../../../components/ecommerce/MonthlySalesChart";
// import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import MonthlyTarget from "../../../components/ecommerce/MonthlyTarget";
import RecentOrders from "../../../components/ecommerce/RecentOrders";
import DemographicCard from "../../../components/ecommerce/DemographicCard";
import PageMeta from "../../../components/common/PageMeta";

/*************  ✨ Windsurf Command ⭐  *************/
/**
 * Renders the Home component for the React.js Ecommerce Dashboard.
 * This component displays various sections including ecommerce metrics,
 * monthly sales chart, monthly target, demographic card, and recent orders.
 * It uses a responsive grid layout to arrange these components.
 * The PageMeta component sets the metadata for the page.
 */

/*******  1b41aacd-e788-4a86-a5ea-9a21e2cf8097  *******/
export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />

          <MonthlySalesChart />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <MonthlyTarget />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>

        <div className="col-span-12 xl:col-span-7">
          <RecentOrders />
        </div>
      </div>
    </>
  );
}
