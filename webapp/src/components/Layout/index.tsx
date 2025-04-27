import { Link, Outlet } from 'react-router-dom'
import { getAllPostsRoute, getNewPostRoute } from '../../lib/routes'
import css from './index.module.scss'

export const  Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <div className={css.logo}>Blog Lite</div>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getAllPostsRoute()}>
              All Posts
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={getNewPostRoute()}>
              New Post
            </Link>
          </li>
        </ul>
      </div>
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  )
}