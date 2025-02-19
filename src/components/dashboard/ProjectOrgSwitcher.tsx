import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function ProjectOrgSwitcher() {
  const [activeTab, setActiveTab] = useState('projects')

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Switch Project/Organization</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Switch Project/Organization</DialogTitle>
        </DialogHeader>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="organizations">Organizations</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            {/* TODO: Add project list */}
            <Button className="mt-4 w-full">Add New Project</Button>
          </TabsContent>
          <TabsContent value="organizations">
            {/* TODO: Add organization list */}
            <Button className="mt-4 w-full">Add New Organization</Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

