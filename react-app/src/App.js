import logo from './logo.svg';
import './App.css';
import React from "react";
 import Textform from './Textform';
import { useState } from 'react';
import Fun from './first_react';

import Navbar from './Navebar';
import Demo from './Demo';



function App() {
const [mode,setMode]= useState('light')
const toggelMode=()=>{
  if(mode==='light'){
   setMode('dark');
   document.body.style.backgroundColor='#042743';

  }
  else{
    setMode('light');
    document.body.style.backgroundColor="white";
  }
}
  return (


    <>

<Navbar title="textUtil" mode={mode} toggelMode={toggelMode}/>
<div className='container'>

<Textform/>
</div>

<Demo/>
<Fun/>
</>
  );

}

export default App;
