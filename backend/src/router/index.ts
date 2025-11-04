import { trpc } from "../lib/trpc"
import { createPostTrpcRoute } from "./createPost"
import { getPostTrpcRoute } from "./getPost"
import { getPostsTrpcRoute } from "./getPosts"

export const trpcRouter = trpc.router({
  getPost: getPostTrpcRoute,
  getPosts: getPostsTrpcRoute,
  createPost: createPostTrpcRoute,
})

export type TrpcRouter = typeof trpcRouter