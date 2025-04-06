import { useParams } from "react-router-dom"

export const ViewPostPage = () => {
  const { postId } = useParams()
  
  return (
    <div>
      <h1>Post #{postId}</h1>
      <p>Description</p>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus ex exercitationem consectetur dolores, 
        amet totam maxime eum voluptas quisquam voluptates inventore cupiditate error fuga quod nulla non laboriosam at quasi?
      </div>
    </div>
  )
}