import React, { useContext, useState,ChangeEvent } from 'react';
import './App.css';
import Navbar from "./Navbar"
import WordPage from "./WordPage"
import { ThemeContext } from './ThemeContext';


function App() {
  const {theme}=useContext(ThemeContext)
  const [font,setFont]=useState<string>("serif")

const selectFont=(e:ChangeEvent<HTMLSelectElement>):void=>{
  setFont(e.target.value)
}
console.log(font)
  return (
      <div className={theme==='light' ? "App" : "App_dark"} style={{fontFamily:font}}>
        <Navbar handleChange={selectFont}/>
        <WordPage/>
      </div>
  );
}

export default App;
