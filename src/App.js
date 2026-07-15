import React from 'react'
import MyPortfolio from './Components/MyPortfolio'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AllProject from './Components/AllProject'
import RootLayout from './RootLayout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "allproject",
        element: <AllProject />,
      },
      {
        index: true,
        element: <MyPortfolio />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
