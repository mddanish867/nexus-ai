import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CreateProject() {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [organization, setOrganization] = useState("")
  const [repositories, setRepositories] = useState<string[]>([])

  const handleCreateProject = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Create project:", { name, description, organization, repositories })
  }

  return (
    <Card className="w-[450px]">
      <CardHeader>
        <CardTitle>Create Project</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleCreateProject} className="space-y-4">
          <Input
            placeholder="Project Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Textarea
            placeholder="Project Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <Select onValueChange={setOrganization} required>
            <SelectTrigger>
              <SelectValue placeholder="Select Organization" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="org1">Organization 1</SelectItem>
              <SelectItem value="org2">Organization 2</SelectItem>
              <SelectItem value="org3">Organization 3</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={(value) => setRepositories([...repositories, value])}>
            <SelectTrigger>
              <SelectValue placeholder="Link Repositories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="repo1">Repository 1</SelectItem>
              <SelectItem value="repo2">Repository 2</SelectItem>
              <SelectItem value="repo3">Repository 3</SelectItem>
            </SelectContent>
          </Select>
          {repositories.length > 0 && (
            <div>
              <h4 className="mb-2">Linked Repositories:</h4>
              <ul className="list-disc list-inside">
                {repositories.map((repo, index) => (
                  <li key={index}>{repo}</li>
                ))}
              </ul>
            </div>
          )}
          <Button type="submit" className="w-full">Create Project</Button>
        </form>
      </CardContent>
    </Card>
  )
}

