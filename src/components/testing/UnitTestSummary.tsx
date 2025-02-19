import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface TestResult {
  id: string
  file: string
  passed: number
  failed: number
}

const testResults: TestResult[] = [
  { id: "1", file: "src/components/App.test.js", passed: 5, failed: 0 },
  { id: "2", file: "src/utils/helpers.test.js", passed: 3, failed: 1 },
  { id: "3", file: "src/hooks/useData.test.js", passed: 2, failed: 2 },
]

export function UnitTestSummary() {
  const handleDownloadResults = () => {
    console.log("Download test results")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Unit Test Summary</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>File</TableHead>
              <TableHead>Passed</TableHead>
              <TableHead>Failed</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {testResults.map((result) => (
              <TableRow key={result.id}>
                <TableCell>{result.file}</TableCell>
                <TableCell className="text-green-600">{result.passed}</TableCell>
                <TableCell className="text-red-600">{result.failed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button onClick={handleDownloadResults} className="mt-4">Download Test Results</Button>
      </CardContent>
    </Card>
  )
}

