import HomePage from "../pages/HomePage";
import Products from "../pages/Products";

function PageRoutes () {
     return [
          {
               path: '/',
               element: <HomePage />
          },
          {
               path: '/:id/products',
               element: <Products />
          }
     ];
}

export default PageRoutes;