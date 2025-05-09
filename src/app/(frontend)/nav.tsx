import Logout from './logout'

export function Nav() {
  return (
    <nav className="flex gap-4">
      <a href="/">Home</a>
      <a href="/create-todo">Create Todo</a>
      <a href="/todos">Todos</a>
      <a href="/sign-in">Sign In</a>
      <Logout />
    </nav>
  )
}
