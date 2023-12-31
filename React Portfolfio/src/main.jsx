import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'

import Error from './components/Error';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/projects';
import About from './components/About';

import Resume from './components/Resume';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/About',
        element: <About />,
      },
      {
        path: '/projects',
        element: <Projects />,
        
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/resume',
        element: <Resume />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
