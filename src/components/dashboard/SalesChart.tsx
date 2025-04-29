
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 2780 },
  { name: 'May', value: 1890 },
  { name: 'Jun', value: 2390 },
  { name: 'Jul', value: 3490 },
];

export default function SalesChart() {
  return (
    <div className="rounded-lg border border-dashboard-border-light bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-medium">Sales Analytics</h2>
        
        <div className="flex space-x-2">
          <button className="rounded-md bg-dashboard-blue-light px-3 py-1 text-sm font-medium text-dashboard-blue">
            Weekly
          </button>
          <button className="rounded-md px-3 py-1 text-sm font-medium text-dashboard-text-secondary">
            Monthly
          </button>
          <button className="rounded-md px-3 py-1 text-sm font-medium text-dashboard-text-secondary">
            Yearly
          </button>
        </div>
      </div>
      
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line
              type="monotone"
              dataKey="value"
              stroke="#3361FF"
              strokeWidth={2}
              dot={{ stroke: '#3361FF', strokeWidth: 2, fill: '#ffffff', r: 4 }}
              activeDot={{ stroke: '#3361FF', strokeWidth: 2, fill: '#3361FF', r: 6 }}
            />
            <CartesianGrid stroke="#EDEFF2" strokeDasharray="5 5" vertical={false} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8A94A6', fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#8A94A6', fontSize: 12 }}
              dx={-10}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #EDEFF2',
                borderRadius: '4px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
              itemStyle={{ color: '#4E5D78' }}
              labelStyle={{ color: '#8A94A6', marginBottom: '5px' }}
              formatter={(value: number) => [`$${value}`, 'Sales']}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
