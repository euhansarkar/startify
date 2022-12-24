import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { theme } from './Themes/Themes';
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';

export const router = createBrowserRouter([
  {
    path: `/`,
    element: <Main></Main>,
    children: [
      {
        path: `/`,
        element: <Home></Home>
      }
    ]
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>

      <RouterProvider router={router}/>
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;
