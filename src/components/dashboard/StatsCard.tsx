
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type StatsCardProps = {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  iconBgColor: string;
  trend?: {
    value: number;
    positive: boolean;
  };
};

export default function StatsCard({
  title,
  value,
  icon: Icon,
  iconColor,
  iconBgColor,
  trend,
}: StatsCardProps) {
  return (
    <div className="rounded-lg border border-dashboard-border-light bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-dashboard-text-secondary">
            {title}
          </p>
          <p className="mt-1 text-2xl font-semibold">{value}</p>
          
          {trend && (
            <div className="mt-2 flex items-center text-xs">
              <span
                className={cn(
                  'mr-1 flex items-center',
                  trend.positive ? 'text-dashboard-green' : 'text-dashboard-red'
                )}
              >
                {trend.positive ? '↑' : '↓'} {Math.abs(trend.value)}%
              </span>
              <span className="text-dashboard-text-secondary">vs last week</span>
            </div>
          )}
        </div>
        
        <div
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-md',
            iconBgColor
          )}
        >
          <Icon className={cn('h-5 w-5', iconColor)} />
        </div>
      </div>
    </div>
  );
}
