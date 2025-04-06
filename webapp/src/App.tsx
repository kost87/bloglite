import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TrpcProvider } from "./lib/trpc"
import { AllPostsPage } from "./pages/AllPostsPage"
import { ViewPostPage } from "./pages/ViewPostsPage"
import { getAllPostsRoute, getViewPostRoute } from "./lib/routes"

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path={getAllPostsRoute()} element={<AllPostsPage/>}/>
          <Route path={getViewPostRoute({ postId: ':postId'})} element={<ViewPostPage/>}/>
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}