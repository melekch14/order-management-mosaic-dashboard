
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Settings,
  LogOut,
} from 'lucide-react';

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
};

const SidebarItem = ({ icon: Icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all',
        active
          ? 'bg-dashboard-blue text-white'
          : 'text-dashboard-text-secondary hover:bg-dashboard-blue-light hover:text-dashboard-blue'
      )}
    >
      <Icon size={18} />
      <span>{label}</span>
    </Link>
  );
};

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="hidden md:flex h-screen w-64 flex-col border-r border-dashboard-border-light bg-white">
      {/* Logo */}
      <div className="flex h-14 items-center border-b border-dashboard-border-light px-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-dashboard-blue flex items-center justify-center">
            <span className="text-white font-bold">O</span>
          </div>
          <span className="text-lg font-semibold">OrderPro</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        <nav className="flex flex-col gap-1">
          <SidebarItem
            icon={LayoutDashboard}
            label="Dashboard"
            href="/"
            active={currentPath === '/'}
          />
          <SidebarItem 
            icon={ShoppingCart} 
            label="Orders" 
            href="/orders" 
            active={currentPath === '/orders'}
          />
          <SidebarItem 
            icon={Package} 
            label="Products" 
            href="/products" 
            active={currentPath === '/products'}
          />
          <SidebarItem 
            icon={Users} 
            label="Customers" 
            href="/customers" 
            active={currentPath === '/customers'}
          />
          <SidebarItem 
            icon={Settings} 
            label="Settings" 
            href="/settings"
            active={currentPath === '/settings'} 
          />
        </nav>
      </div>

      {/* Logout */}
      <div className="border-t border-dashboard-border-light p-4">
        <button className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-dashboard-text-secondary hover:bg-dashboard-blue-light hover:text-dashboard-blue">
          <LogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
