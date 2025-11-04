import { number, z } from "zod"
import { posts } from "../../lib/posts"
import { trpc } from "../../lib/trpc"
import { zCreatePostTrpcInput } from "./input";

export const createPostTrpcRoute = trpc.procedure.input(zCreatePostTrpcInput).mutation(({ input }) => {
  const id: number = posts[posts.length - 1].id + 1;
  posts.unshift({ ...input, id: id });
  return true;
})