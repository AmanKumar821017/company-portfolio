import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Development from './Components/Development/Development';
import SEO from './Components/SEO/SEO';
import UIUX from './Components/UIUX/UIUX';
import DataAnalytics from './Components/DataAnalytics/DataAnalytics';
import About from './Components/AboutUs/About';
import ContactUs from './Components/ContactUs/ContactUs';





const App = () => {

  const router = createBrowserRouter([
    {
       path: '/',
      element: <Layout />,
      children: [
    {
      
      path: '/',
      element: <Home />,
    },
    {
      path: '/web-development',
      element: <Development />
    },
    {
      path: '/seo',
      element: <SEO />
    },
    {
      path: '/uiux-design',
      element: <UIUX />
    },
    {
      path: '/data-analytics',
      element: <DataAnalytics />
    },
     {
      path: '/about',
      element: <About />
    },
    {
      path: '/contact',
      element: <ContactUs/>
    },
   ]
    }
  ])
  return   <RouterProvider router={router} /> ;
};
    

export default App
