import { Link } from 'react-router-dom'
import { trpc } from '../../lib/trpc'
import { getViewPostRoute } from '../../lib/routes'


export const AllPostsPage = () => {
    const { data, error, isLoading, isFetching, isError } = trpc.getPosts.useQuery()

    if (isLoading || isFetching) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    return (
      <div>
        <h1>Blog Lite</h1>
        <div>
          {data?.posts.map((post) => (
            <div key={post.id}>
              <h2><Link to={getViewPostRoute({ postId: post.id.toString() })}>{post.name}</Link></h2>
              <p>{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }