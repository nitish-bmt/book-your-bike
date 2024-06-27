import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Components
import PersonalDetails from './Components/PersonalDetails';
import ServiceDetails from './Components/ServiceDetails';
import BookingDetails from './Components/BookingDetails';
import Summary from './Components/Summary';

// // Roboto for MUI
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';



// Packages
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// for child routes
// import Root, { rootLoader } from "./routes/root";
// import Team, { teamLoader } from "./routes/team";

// Creating my Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "personal",
    element: <PersonalDetails/>,
  },
  {
    path: "vehicle",
    element: <ServiceDetails/>,
  },
  {
    path: "booking",
    element: <BookingDetails/>,
  },
  {
    path: "summary",
    element: <Summary/>,
  },
  
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
