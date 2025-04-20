import { useParams } from "react-router-dom"
import { ViewPostRouteParams } from "../../lib/routes"
import { trpc } from "../../lib/trpc"

export const ViewPostPage = () => {
  const { postId } = useParams() as ViewPostRouteParams

  const { data, error, isLoading, isFetching, isError } = trpc.getPost.useQuery({ postId })
  
  if (isLoading || isFetching) {
    return <span>Loading...</span>
  }

  if (isError) {
      return <span>Error: {error.message}</span>
  }

  if (!data.post) {
    return <span>Post not found</span>
  }

  return (
    <div>
      <h1>{data.post.name}</h1>
      <p>{data.post.description}</p>
      <div dangerouslySetInnerHTML={{__html: data.post.text}} />
    </div>
  )
}