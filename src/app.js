import React from 'react';
import ReactDOM from 'react-dom/client'; 
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Login from './components/Login';
import Profile from './components/ProfileClass';

/**
* Header
*  - Logo (Title)
*  - Nav Items (Right Side)
*  - Cart
* Body
*  - Search Bar
*  - Restaurants list
*    - Restaurant Card (many)
*      - Image
*      - Name
*      - Rating
*      - Cuisines
* Footer
*  - Links
*  - Copyright
*/

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element:  <Profile />
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
    ]
  },
  {
    path : '/login',
    element: <Login />,
    errorElement: <Error />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
