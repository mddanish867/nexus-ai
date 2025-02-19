import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Github,  GithubIcon as Bitbucket, CloudIcon as Azure, CloudIcon as Aws, Cloud } from 'lucide-react'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement login logic
    console.log('Login attempted with:', email, password)
  }

  const handleOAuth = (provider: string) => {
    // TODO: Implement OAuth logic
    console.log('OAuth login attempted with:', provider)
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e:any) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e:any) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">Login</Button>
        </form>
        <Button variant="link" className="mt-2 w-full">Forgot Password?</Button>
      </CardContent>
      <CardFooter className="flex flex-wrap justify-center gap-2">
        <Button variant="outline" size="icon" onClick={() => handleOAuth('GitHub')}><Github className="h-4 w-4" /></Button>
        <Button variant="outline" size="icon" onClick={() => handleOAuth('Bitbucket')}><Bitbucket className="h-4 w-4" /></Button>
        <Button variant="outline" size="icon" onClick={() => handleOAuth('Azure')}><Azure className="h-4 w-4" /></Button>
        <Button variant="outline" size="icon" onClick={() => handleOAuth('AWS')}><Aws className="h-4 w-4" /></Button>
        <Button variant="outline" size="icon" onClick={() => handleOAuth('GCP')}><Cloud className="h-4 w-4" /></Button>
      </CardFooter>
    </Card>
  )
}

