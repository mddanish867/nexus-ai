import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Project {
  id: string
  name: string
  description: string
}

const projects: Project[] = [
  { id: "1", name: "Project A", description: "Description for Project A" },
  { id: "2", name: "Project B", description: "Description for Project B" },
  { id: "3", name: "Project C", description: "Description for Project C" },
]

export function ProjectList() {
  const handleViewProject = (id: string) => {
    console.log(`View project with id: ${id}`)
  }

  const handleDeleteProject = (id: string) => {
    console.log(`Delete project with id: ${id}`)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell>{project.name}</TableCell>
            <TableCell>{project.description}</TableCell>
            <TableCell>
              <Button onClick={() => handleViewProject(project.id)} className="mr-2">
                View Project
              </Button>
              <Button variant="destructive" onClick={() => handleDeleteProject(project.id)}>
                Delete Project
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

