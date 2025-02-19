import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DocumentationGenerator() {
  const [template, setTemplate] = useState("")
  const [preview, setPreview] = useState("")

  const handleGenerateDocumentation = () => {
    // This is a placeholder. In a real application, you'd generate the documentation based on the template.
    setPreview(`Generated documentation based on template:

# Component: ExampleComponent

## Props

- prop1: string
- prop2: number

## Description

This component does...

## Usage

\`\`\`jsx
<ExampleComponent prop1="value" prop2={42} />
\`\`\`
`)
  }

  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle>Documentation Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Write custom templates or use default."
          value={template}
          onChange={(e:any) => setTemplate(e.target.value)}
          rows={5}
          className="mb-4"
        />
        <Button onClick={handleGenerateDocumentation} className="w-full mb-4">Generate Documentation</Button>
        {preview && (
          <div>
            <h3 className="text-lg font-semibold mb-2">Preview:</h3>
            <pre className="bg-gray-100 p-4 rounded">{preview}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

