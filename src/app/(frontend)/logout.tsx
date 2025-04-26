'use client'
import { Button } from '@/components/ui/button'

const Logout = () => {
  const doLogout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    if (response.ok) {
      window.location.href = '/'
    } else {
      console.error('Logout failed')
    }
  }
  return (
    <Button variant="link" onClick={doLogout}>
      Log out
    </Button>
  )
}

export default Logout
