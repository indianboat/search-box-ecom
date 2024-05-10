import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ProductListPage from "../components/ProductListPage/ProductListPage"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/search",
    element: <ProductListPage />
  }
])