import './App.css';
import Navbar from './components/Navbar.js';
import Alert from './components/Alert';
// import About from './components/About';
import Form from './components/Form.js';
import { useState } from 'react';
import React from "react";

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode has been enabled", "Success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "Success");
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="PlayWithText" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        {/* <Routes>
            <Route exact path="/about" element={<About />} >
            </Route> */}
        {/* <Route exact path="/" element={<Form heading="Try out my first react app now!" mode={mode} showAlert={showAlert} />}> */}
        <Form heading="Try out my first react app now!" mode={mode} showAlert={showAlert} />
        {/* </Route>
          </Routes> */}
      </div >
      {/* </Router> */}
    </>
  );
}

export default App;