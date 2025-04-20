import { initTRPC } from '@trpc/server'
import _ from 'lodash'
import { z } from 'zod'

const posts = _.times(100, (i) => ({
  id: i,
  name: `Post ${i}`,
  description: `Post ${i} description...`,
  text: _.times(100, (j) => `<p>Text paragraph ${j} of idea ${i}...</p>`).join(''),
}))

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getPosts: trpc.procedure.query(() => {
    return { posts: posts.map((post) => _.pick(post, ['id', 'name', 'description'])) }
  }),
  getPost: trpc.procedure.input(
    z.object({
      postId: z.string(),
    }),
  ).query(({ input }) => {
    const post =posts.find((post) => post.id === +input.postId)
    return { post: post || null }
  })
})

export type TrpcRouter = typeof trpcRouter