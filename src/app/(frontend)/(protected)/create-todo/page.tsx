import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function TodoCreate() {
  return (
    <div className="home text-primary">
      <div className="content">
        <h2 className="text-3xl text-primary">Create Todo</h2>
        <form method="POST" action="/api/todos" className="flex flex-col gap-4">
          <Input type="text" name="title" placeholder="Title" required />
          <Input type="text" name="description" placeholder="Description" required />
          <Button type="submit">Create Todo</Button>
        </form>
      </div>
    </div>
  )
}
