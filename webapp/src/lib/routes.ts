const getRouteParams = <T extends Record<string, boolean>>(object: T) => {
    return Object.keys(object).reduce((acc, key) => ({...acc, [key] : `:${key}`}), {}) as Record<keyof T, string>
}

export const getAllPostsRoute = () => '/'

export const viewPostRouteParams = getRouteParams({ postId: true })
export type ViewPostRouteParams = typeof viewPostRouteParams
export const getViewPostRoute = ({ postId }: ViewPostRouteParams) => `/posts/${postId}`

export const getNewPostRoute = () => `/posts/new`
