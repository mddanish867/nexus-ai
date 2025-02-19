import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Repository {
  id: string
  name: string
  url: string
}

const repositories: Repository[] = [
  { id: "1", name: "Repo A", url: "https://github.com/user/repo-a" },
  { id: "2", name: "Repo B", url: "https://github.com/user/repo-b" },
  { id: "3", name: "Repo C", url: "https://github.com/user/repo-c" },
]

export function RepositoryList() {
  const handleSyncRepo = (id: string) => {
    console.log(`Sync repository with id: ${id}`)
  }

  const handleFetchHistory = (id: string) => {
    console.log(`Fetch history for repository with id: ${id}`)
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>URL</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {repositories.map((repo) => (
          <TableRow key={repo.id}>
            <TableCell>{repo.name}</TableCell>
            <TableCell>{repo.url}</TableCell>
            <TableCell>
              <Button onClick={() => handleSyncRepo(repo.id)} className="mr-2">
                Sync Repository
              </Button>
              <Button onClick={() => handleFetchHistory(repo.id)}>
                Fetch Branch/Commit History
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

