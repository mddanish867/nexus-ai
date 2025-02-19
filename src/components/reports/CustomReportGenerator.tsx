import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function CustomReportGenerator() {
  const [project, setProject] = useState("")
  const [dateRange, setDateRange] = useState("")
  const [metricType, setMetricType] = useState("")

  const handleGenerateReport = () => {
    console.log(`Generating report for Project: ${project}, Date Range: ${dateRange}, Metric Type: ${metricType}`)
  }

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Custom Report Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Select onValueChange={setProject}>
            <SelectTrigger>
              <SelectValue placeholder="Select Project" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="project1">Project 1</SelectItem>
              <SelectItem value="project2">Project 2</SelectItem>
              <SelectItem value="project3">Project 3</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setDateRange}>
            <SelectTrigger>
              <SelectValue placeholder="Select Date Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="last7days">Last 7 Days</SelectItem>
              <SelectItem value="last30days">Last 30 Days</SelectItem>
              <SelectItem value="lastQuarter">Last Quarter</SelectItem>
            </SelectContent>
          </Select>
          <Select onValueChange={setMetricType}>
            <SelectTrigger>
              <SelectValue placeholder="Select Metric Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="testCoverage">Test Coverage</SelectItem>
              <SelectItem value="codeSmells">Code Smells</SelectItem>
              <SelectItem value="performance">Performance</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleGenerateReport} className="w-full">Download PDF</Button>
        </div>
      </CardContent>
    </Card>
  )
}

