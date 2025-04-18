import { initTRPC } from '@trpc/server'

const posts = [
  { id: 1, name: 'Post 1', description: 'Post 1 description...' },
  { id: 2, name: 'Post 2', description: 'Post 2 description...' },
  { id: 3, name: 'Post 3', description: 'Post 3 description...' },
  { id: 4, name: 'Post 4', description: 'Post 4 description...' },
  { id: 5, name: 'Post 5', description: 'Post 5 description...' },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getPosts: trpc.procedure.query(() => {
    return { posts }
  }),
})

export type TrpcRouter = typeof trpcRouter