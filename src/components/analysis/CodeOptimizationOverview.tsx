import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: 'Optimized', value: 60 },
  { name: 'Not Optimized', value: 40 },
]

const COLORS = ['#0088FE', '#FF8042']

export function CodeOptimizationOverview() {
  const handleOptimizeAll = () => {
    console.log("Optimize all components")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Code Optimization Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 text-center">
          <p>Components Optimized: 60</p>
          <p>Saved Lines of Code: 1200</p>
        </div>
        <Button onClick={handleOptimizeAll} className="w-full mt-4">Optimize All</Button>
      </CardContent>
    </Card>
  )
}

