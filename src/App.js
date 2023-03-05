import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from "react";
import Alert from './components/Alert';

// import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, dtype) =>
  {
    let ntype = dtype.toLowerCase();
    setAlert(
      {
        msg: message,
        type: ntype,
        displayType: dtype
      }
    )
    setTimeout(() => {setAlert(null)}, 1000);
  }
  const backgroundRed = () =>
  {
    document.body.style.backgroundColor = "#A01317";
  }
  const backgroundYellow = () =>
  {
    document.body.style.backgroundColor = "#EBDE00";
  }
  const toggleMode = () =>
  {
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor = "#313438";
      showAlert("Dark mode enabled", "Success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "Success");
    }
  }
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <TextForm showAlert = {showAlert} heading="Enter text to analyze below" mode={mode}/>
  //   },
  //   {
  //     path: "/about",
  //     element: <About mode={mode}/>
  //   }
  // ])
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} showRed={backgroundRed} showYellow={backgroundYellow}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      <TextForm showAlert = {showAlert} heading="Enter text to analyze below" mode={mode}/>
      {/* <RouterProvider router={router}/>
      <Outlet/> */}
    </div>
    </>
  );
}

export default App;
