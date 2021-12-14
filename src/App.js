import React, { useState } from 'react'
import About from './Components/About'
import Alert from './Components/Alert';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message,type) => {
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }
  const removeClass = (params) => {
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("#3f30b2");
  }
  const toggleMode = (cls) => {
    removeClass();
    if(cls!==null){
    document.body.classList.add('bg-'+cls);
    }else{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="#fff";
      showAlert("White mode is enabled!","success");
      document.title="TextUtiles- light mode!";

  }else{
    setMode("dark")
    document.body.style.backgroundColor="#3f30b2";
    showAlert("Dark mode is enabled!","success");
    document.title="TextUtiles- dark mode!";
  };
  }
}
  return (
    <Router>
      <>
      <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode}/>
         <Alert alert={alert} />
         <div className="container my-4">
          <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Textutiles- Word counter ,character counter : " mode={mode}/>} />
          <Route exact path="/about" element={<About  mode={mode}/>} />
          </Routes>
         </div>
         </>
     </Router>
  )
}

export default App
