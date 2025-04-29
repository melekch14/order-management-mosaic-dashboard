
import { useState } from 'react';
import { Search, Filter, Download, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CustomersTable from './CustomersTable';
import CustomersPagination from './CustomersPagination';

export default function CustomersContent() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-dashboard-text-primary">Customers</h1>
        <Button>
          <Plus size={18} />
          <span>Add Customer</span>
        </Button>
      </div>
      
      <div className="flex flex-col gap-6">
        {/* Filters and Search bar */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-dashboard-text-secondary" />
            <Input
              placeholder="Search customers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline">
              <Filter size={16} />
              <span>Filter</span>
            </Button>
            <Button variant="outline">
              <Download size={16} />
              <span>Export</span>
            </Button>
          </div>
        </div>
        
        {/* Customers Table */}
        <CustomersTable />
        
        {/* Pagination */}
        <CustomersPagination />
      </div>
    </div>
  );
}
