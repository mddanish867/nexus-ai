import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface Activity {
  id: number
  description: string
  timestamp: string
}

const activities: Activity[] = [
  { id: 1, description: "Documentation generated for Project X", timestamp: "2 hours ago" },
  { id: 2, description: "Code smells resolved in file Y", timestamp: "4 hours ago" },
  { id: 3, description: "Unit tests written for Component Z", timestamp: "1 day ago" },
  { id: 4, description: "New project 'Alpha' created", timestamp: "2 days ago" },
]

export function ActivityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Feed</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity) => (
            <li key={activity.id} className="flex justify-between items-center">
              <span>{activity.description}</span>
              <span className="text-sm text-muted-foreground">{activity.timestamp}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

