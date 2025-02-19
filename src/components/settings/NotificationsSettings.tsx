import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function NotificationsSettings() {
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [slackNotifications, setSlackNotifications] = useState(false)

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Notifications Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="email-notifications">Email Notifications</Label>
            <Switch
              id="email-notifications"
              checked={emailNotifications}
              onCheckedChange={setEmailNotifications}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="slack-notifications">Slack Notifications</Label>
            <Switch
              id="slack-notifications"
              checked={slackNotifications}
              onCheckedChange={setSlackNotifications}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

