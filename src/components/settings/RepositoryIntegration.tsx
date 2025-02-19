import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Repository {
  id: string
  url: string
  authType: "OAuth" | "PAT"
}

const initialRepositories: Repository[] = [
  { id: "1", url: "https://github.com/user/repo1", authType: "OAuth" },
  { id: "2", url: "https://github.com/user/repo2", authType: "PAT" },
]

export function RepositoryIntegration() {
  const [repositories, setRepositories] = useState(initialRepositories)
  const [newRepoUrl, setNewRepoUrl] = useState("")
  const [newRepoAuthType, setNewRepoAuthType] = useState<"OAuth" | "PAT">("OAuth")

  const handleAddRepository = () => {
    if (newRepoUrl) {
      setRepositories([...repositories, { id: Date.now().toString(), url: newRepoUrl, authType: newRepoAuthType }])
      setNewRepoUrl("")
      setNewRepoAuthType("OAuth")
    }
  }

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Repository Integration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            placeholder="Repository URL"
            value={newRepoUrl}
            onChange={(e) => setNewRepoUrl(e.target.value)}
          />
          <Select value={newRepoAuthType} onValueChange={(value) => setNewRepoAuthType(value as "OAuth" | "PAT")}>
            <SelectTrigger>
              <SelectValue placeholder="Authentication Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="OAuth">OAuth</SelectItem>
              <SelectItem value="PAT">Personal Access Token</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleAddRepository} className="w-full">Add Repository</Button>
          <div>
            <h3 className="text-lg font-semibold mb-2">Connected Repositories:</h3>
            <ul className="list-disc list-inside">
              {repositories.map((repo) => (
                <li key={repo.id}>{repo.url} ({repo.authType})</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

