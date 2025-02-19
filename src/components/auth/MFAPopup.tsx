import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface MFAPopupProps {
  isOpen: boolean
  onClose: () => void
  onVerify: (otp: string) => void
}

export function MFAPopup({ isOpen, onClose, onVerify }: MFAPopupProps) {
  const [otp, setOtp] = useState('')

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault()
    onVerify(otp)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Multi-Factor Authentication</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleVerify} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <Button type="submit" className="w-full">Verify</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

