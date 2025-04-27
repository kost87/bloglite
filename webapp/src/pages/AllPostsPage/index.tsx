import { Link } from 'react-router-dom'
import { trpc } from '../../lib/trpc'
import { getViewPostRoute } from '../../lib/routes'
import css from './index.module.scss'
import { Segment } from '../../components/Segment'

export const AllPostsPage = () => {
  const { data, error, isLoading, isFetching, isError } = trpc.getPosts.useQuery()

  if (isLoading || isFetching) {
      return <span>Loading...</span>
  }

  if (isError) {
      return <span>Error: {error.message}</span>
  }

  return (
    <Segment title="Blog Lite">
      <div className={css.posts}>
        {data?.posts.map((post) => (
          <div className={css.post} key={post.id}>
            <Segment
              size={2}
              title={
                <Link className={css.postLink} to={getViewPostRoute({ postId: post.id.toString() })}>
                  {post.name}
                </Link>
              }
              description={post.description}
            />
          </div>
        ))}
      </div>
    </Segment>
  )
}