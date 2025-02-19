import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface CodeSmell {
  id: string
  description: string
  severity: "Critical" | "Major" | "Minor"
  file: string
}

const codeSmells: CodeSmell[] = [
  { id: "1", description: "Unused variable", severity: "Minor", file: "src/components/App.js" },
  { id: "2", description: "Duplicate code", severity: "Major", file: "src/utils/helpers.js" },
  { id: "3", description: "Memory leak", severity: "Critical", file: "src/hooks/useData.js" },
]

export function CodeSmellsAnalysis() {
  const [filter, setFilter] = useState<"Critical" | "Major" | "Minor" | "All">("All")

  const filteredSmells = filter === "All" ? codeSmells : codeSmells.filter(smell => smell.severity === filter)

  const handleFixAutomatically = (id: string) => {
    console.log(`Fix code smell with id: ${id}`)
  }

  const handleGenerateReport = () => {
    console.log("Generate code smells report")
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Select onValueChange={(value:any) => setFilter(value as "Critical" | "Major" | "Minor" | "All")}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by Severity" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Critical">Critical</SelectItem>
            <SelectItem value="Major">Major</SelectItem>
            <SelectItem value="Minor">Minor</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={handleGenerateReport}>Generate Report</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Description</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>File</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSmells.map((smell) => (
            <TableRow key={smell.id}>
              <TableCell>{smell.description}</TableCell>
              <TableCell>{smell.severity}</TableCell>
              <TableCell>{smell.file}</TableCell>
              <TableCell>
                <Button onClick={() => handleFixAutomatically(smell.id)}>Fix Automatically</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

