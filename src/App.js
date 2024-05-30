import React from 'react'
import MyPortfolio from './Components/MyPortfolio'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AllProject from '../src/Components/AllProject'

const router = createBrowserRouter([
  {
    path:"/allproject",
    element: <AllProject/>,
  },
  {
    path:"/",
    element: <MyPortfolio />,
  },
]);

const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
