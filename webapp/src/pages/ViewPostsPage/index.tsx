import { useParams } from "react-router-dom"
import { ViewPostRouteParams } from "../../lib/routes"
import { trpc } from "../../lib/trpc"
import css from './index.module.scss'
import { Segment } from "../../components/Segment"

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
    <Segment title={data.post.name} description={data.post.description}>
      <div className={css.text} dangerouslySetInnerHTML={{__html: data.post.text}} />
    </Segment>
  )
}