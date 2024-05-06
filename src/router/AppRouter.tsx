import MainLayouts from '../components/layout/MainLayouts';
// routers
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// pages
import Home from '../pages/Home';
import About from '../pages/About';
import Categories from '../pages/Categories';
import Error404 from '../pages/Error404';
import Products from '../pages/Products';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "categories/products/:prefix",
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-zA-Z]+$/.test(params.prefix)
          ) {
            throw new Response("Bad request", {
              statusText: "category not found",
              status: 400,
            });
          }
          return true;
        },
      },
    ],
  },
]);

const AppRouter = () => {
    return <RouterProvider router={router}  />
}
export default AppRouter;