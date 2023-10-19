import './App.css'
import routes from "./routes"
import Root from "./components/Root"
import Error from './components/Error'
import {
  createBrowserRouter,
  RouterProvider, } from "react-router-dom"

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Root />,
      errorElement: <Error />,
      children: routes
    },
  ])

  return (
      <RouterProvider router={router} />
  )
}

export default App