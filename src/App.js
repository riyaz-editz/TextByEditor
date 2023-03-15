// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Form from './components/Textform';
import Navbar from './components/Navbar';
// import About from './components/About';

function App() {
  const [Mode, setDark] = useState("light"); // whether dark mode is enable 
  const [alert, setalert] = useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);

  }
  const toggle =()=>{
    if(Mode === "light"){
      setDark("dark");
      showalert("Darkmode has been enabled","success");
      document.body.style.backgroundColor ="#0F2137"
      
      
    setInterval(() => {
      document.title="TextByEdit -Home"
      }, 1500);

    setInterval(() => {
    document.title="Created by Riyaz"
    }, 2000);
    }
    else{
      setDark('light');
      showalert("Lightmode has been enabled","success");
      document.body.style.backgroundColor = "white"
      document.getElementById("mybox").placeholder.style.color="red";

    }
    

  }

  return (
    <>
      <Navbar title="TextByEdit" second_tab="services" Mode={Mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className="container my-3 ">
      <Form heading=" Enter The Text To Analyze Below" Mode={Mode} showalert={showalert}/>
      </div>
    </>
  );
}

export default App;
