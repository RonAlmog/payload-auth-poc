import { Button } from '@/components/ui/button'
import { Media } from '@/payload-types'
import config from '@/payload.config'
import Image from 'next/image'
import Link from 'next/link'
import { getPayload } from 'payload'

export default async function Page({ params }: { params: { id: string } }) {
  const payloadConfig = await config
  const { id } = params
  const payload = await getPayload({ config: payloadConfig })
  const todo = await payload.findByID({
    collection: 'todos',
    id,
  })

  return (
    <div className="home text-primary">
      <div className="">
        <Button variant="default" className="mb-4 text-white">
          <Link className="text-white" href="/">
            Back
          </Link>
        </Button>

        <h2 className="text-2xl">Todo ID: {id}</h2>
        <h4 className="text-xl">{todo?.title}</h4>
        <Image
          src={(todo?.media as Media).url || '/default-image.png'}
          alt={todo?.title || 'Todo Image'}
          width={500}
          height={300}
        />
      </div>
    </div>
  )
}
