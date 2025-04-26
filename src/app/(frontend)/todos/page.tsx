import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

export default async function TodosPage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  const todos = await payload.find({
    collection: 'todos',
    limit: 100,
  })

  return (
    <div className="home">
      <div className="content">
        <h2 className="text-3xl text-primary">Payload Todo List {user?.email}</h2>
        <h2 className="text-xl font-bold text-primary">Todos</h2>
        {todos?.docs.map((todo) => (
          <Card key={todo.id} className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>
                <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
              </CardTitle>
            </CardHeader>
            <CardContent>{todo.description}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
