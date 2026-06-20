import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './private/routes';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

/*
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Import the exercise component directly and wrap it in BrowserRouter.
// This replaces the createBrowserRouter/RouterProvider setup that was
// throwing "404 Not Found" on deep links like /products/hat-001.
import StudentWork from '../lesson-10/studentWork.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StudentWork />
    </BrowserRouter>
  </React.StrictMode>
);*/
