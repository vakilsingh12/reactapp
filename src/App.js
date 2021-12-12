import React, { useState } from 'react'
import About from './Components/About'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = (params) => {
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="#fff"
  }else{
    setMode("dark")
    document.body.style.backgroundColor="grey"
  };
  }
  return (
    <>
         <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode}/>
         <div className="container my-5">
         <TextForm heading="Enter the text to analyze below" mode={mode}/>
         {/* <About/> */}
         </div>
    </>
  )
}

export default App
