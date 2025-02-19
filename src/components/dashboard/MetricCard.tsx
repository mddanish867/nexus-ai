import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, TestTube, AlertTriangle, Zap } from 'lucide-react';

function MetricCard({ title, value, icon }:any) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}

export function SummaryMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <MetricCard
        title="Total Documentation Generated"
        value={1234}
        icon={<FileText className="h-4 w-4 text-muted-foreground" />}
      />
      <MetricCard
        title="Total Unit Tests Written"
        value={567}
        icon={<TestTube className="h-4 w-4 text-muted-foreground" />}
      />
      <MetricCard
        title="Code Smells Found"
        value={89}
        icon={<AlertTriangle className="h-4 w-4 text-muted-foreground" />}
      />
      <MetricCard
        title="Components Optimized"
        value={42}
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
      />
    </div>
  );
}