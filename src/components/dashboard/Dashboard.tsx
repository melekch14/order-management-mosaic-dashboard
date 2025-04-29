
import { ShoppingBag, CreditCard, Users, ChevronUp, ChevronDown } from 'lucide-react';
import StatsCard from './StatsCard';
import RecentOrdersTable from './RecentOrdersTable';
import SalesChart from './SalesChart';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 p-4 lg:p-6">
      {/* Stats cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Orders"
          value="12,345"
          icon={ShoppingBag}
          iconColor="text-white"
          iconBgColor="bg-dashboard-blue"
          trend={{ value: 12.5, positive: true }}
        />
        
        <StatsCard
          title="Total Sales"
          value="$48,574.21"
          icon={CreditCard}
          iconColor="text-white"
          iconBgColor="bg-dashboard-green"
          trend={{ value: 8.2, positive: true }}
        />
        
        <StatsCard
          title="New Customers"
          value="578"
          icon={Users}
          iconColor="text-white"
          iconBgColor="bg-dashboard-yellow"
          trend={{ value: 3.1, positive: false }}
        />
        
        <StatsCard
          title="Refunds"
          value="$1,874.54"
          icon={CreditCard}
          iconColor="text-white"
          iconBgColor="bg-dashboard-red"
          trend={{ value: 2.3, positive: false }}
        />
      </div>

      {/* Charts and tables */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <SalesChart />
        </div>
        
        <div className="flex flex-col gap-6">
          {/* Top selling categories */}
          <div className="rounded-lg border border-dashboard-border-light bg-white p-4 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Top Categories</h2>
            
            <div className="space-y-3">
              {[
                { name: 'Electronics', value: 42, color: 'bg-dashboard-blue' },
                { name: 'Clothing', value: 28, color: 'bg-dashboard-green' },
                { name: 'Home & Kitchen', value: 18, color: 'bg-dashboard-yellow' },
                { name: 'Books', value: 12, color: 'bg-dashboard-red' },
              ].map((item) => (
                <div key={item.name}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-sm">{item.name}</span>
                    <span className="text-sm font-medium">{item.value}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-dashboard-border-light">
                    <div
                      className={`h-2 rounded-full ${item.color}`}
                      style={{ width: `${item.value}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Order summary */}
          <div className="rounded-lg border border-dashboard-border-light bg-white p-4 shadow-sm">
            <h2 className="mb-4 text-lg font-medium">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-dashboard-text-secondary">Completed</span>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">1,456</span>
                  <ChevronUp className="h-4 w-4 text-dashboard-green" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-dashboard-text-secondary">Processing</span>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">321</span>
                  <ChevronUp className="h-4 w-4 text-dashboard-blue" />
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-dashboard-text-secondary">Cancelled</span>
                <div className="flex items-center space-x-2">
                  <span className="font-medium">54</span>
                  <ChevronDown className="h-4 w-4 text-dashboard-red" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div>
        <RecentOrdersTable />
      </div>
    </div>
  );
}
