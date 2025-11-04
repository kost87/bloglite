import { z } from "zod"
import { trpc } from "../../lib/trpc"
import { posts } from "../../lib/posts"

export const getPostTrpcRoute = trpc.procedure.input(
  z.object({
    postId: z.string(),
  }),
).query(({ input }) => {
  const post = posts.find((post) => post.id === +input.postId)
  return { post: post || null }
})