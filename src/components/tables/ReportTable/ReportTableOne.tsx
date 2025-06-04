import { Card, CardContent } from "../../components/ui/card/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { useState, useEffect } from "react";

const ReportDashboard = () => {
  const [salesData, setSalesData] = useState<{ month: string; revenue: number }[]>([]);
  const [supplierData, setSupplierData] = useState<{ name: string; sales: number }[]>([]);
  const [fraudReports, setFraudReports] = useState<{ type: string; count: number }[]>([]);
  const [customerRetention, setCustomerRetention] = useState<{ month: string; retentionRate: number }[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<{ name: string; sales: number }[]>([]);

  useEffect(() => {
    // Fetch or simulate data
    setSalesData([
      { month: "Jan", revenue: 5000 },
      { month: "Feb", revenue: 7000 },
      { month: "Mar", revenue: 6000 },
    ]);

    setSupplierData([
      { name: "Supplier A", sales: 120 },
      { name: "Supplier B", sales: 90 },
      { name: "Supplier C", sales: 150 },
    ]);

    setFraudReports([
      { type: "Fake Products", count: 5 },
      { type: "Chargeback Fraud", count: 2 },
      { type: "Account Takeover", count: 3 },
    ]);

    setCustomerRetention([
      { month: "Jan", retentionRate: 85 },
      { month: "Feb", retentionRate: 87 },
      { month: "Mar", retentionRate: 83 },
    ]);
  }, []);

  useEffect(() => {
    setFilteredProducts(
      supplierData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, supplierData]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Report Dashboard</h2>
      
      {/* Search Product Feature */}
      <input
        type="text"
        placeholder="Search product..."
        className="mb-4 p-2 border rounded w-full"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Total Sales & Revenue Growth */}
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold mb-4">Total Sales & Revenue Growth</h3>
            <LineChart width={300} height={200} data={salesData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
            </LineChart>
          </CardContent>
        </Card>

        {/* Most Active Suppliers & Top-Selling Products */}
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold mb-4">Most Active Suppliers & Top-Selling Products</h3>
            <BarChart width={300} height={200} data={filteredProducts}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#82ca9d" />
            </BarChart>
          </CardContent>
        </Card>

        {/* Customer Retention & Order Statistics */}
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold mb-4">Customer Retention & Order Statistics</h3>
            <LineChart width={300} height={200} data={customerRetention}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="retentionRate" stroke="#00C49F" />
            </LineChart>
          </CardContent>
        </Card>

        {/* Fraud Detection & Flagged Accounts */}
        <Card>
          <CardContent>
            <h3 className="text-lg font-semibold mb-4">Fraud Detection & Flagged Accounts</h3>
            <PieChart width={300} height={200}>
              <Pie data={fraudReports} dataKey="count" nameKey="type" cx="50%" cy="50%" outerRadius={60} fill="#ff7300">
                {fraudReports.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={["#8884d8", "#82ca9d", "#ffc658"][index % 3]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportDashboard;
