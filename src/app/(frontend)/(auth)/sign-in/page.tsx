'use server'
import SignInClient from './sign-in-client'

const SignIn = async () => {
  const signin = async (data: { email: string; password: string }) => {
    const response = fetch('/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log({ data })
        if (data?.error) {
          // form.setError('email', { message: data.error })
        } else {
          window.location.href = '/'
        }
      })
      .catch((err) => {
        console.error(err)
        // form.setError('email', { message: 'Something went wrong' })
      })
    console.log({ response })
  }
  return <SignInClient />
}

export default SignIn
