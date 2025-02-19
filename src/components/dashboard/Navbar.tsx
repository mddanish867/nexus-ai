import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, LayoutDashboard, FileText, Settings, LogOut } from 'lucide-react'

export function Navbar() {
  const [selectedProject, setSelectedProject] = useState('Select Project')

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            {selectedProject} <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={() => setSelectedProject('Project A')}>
            Project A
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setSelectedProject('Project B')}>
            Project B
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={() => setSelectedProject('Project C')}>
            Project C
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex space-x-4">
        <Button variant="ghost">
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Dashboard
        </Button>
        <Button variant="ghost">
          <FileText className="mr-2 h-4 w-4" />
          Reports
        </Button>
        <Button variant="ghost">
          <Settings className="mr-2 h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </nav>
  )
}

