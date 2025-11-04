import _ from "lodash"
import { posts } from "../../lib/posts"
import { trpc } from "../../lib/trpc"

export const getPostsTrpcRoute = trpc.procedure.query(() => {
  return { posts: posts.map((post) => _.pick(post, ['id', 'name', 'description'])) }
});