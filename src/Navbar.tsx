import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Switch from '@mui/material/Switch';
import {ChangeEvent, useContext,useState} from "react"
import { ThemeContext } from "./ThemeContext"
import React from "react"

type NavbarProps={
  handleChange(event:ChangeEvent<HTMLSelectElement>):void
}
export default function Navbar({handleChange}:NavbarProps){
  const { toggleTheme, theme } = useContext(ThemeContext);
  const [family,setFamily]=useState<string>("serif")
  
  const changeFamily=(event:ChangeEvent<HTMLSelectElement>)=>{
    handleChange(event)
    setFamily(event.target.value)
  }
  return (
    <div className='navbar'>
      <AutoStoriesIcon/>
      <div className='navbar__details'>
        <select className="navbar__font" name='font' value={family} onChange={changeFamily}>
          <option value="serif" style={{fontFamily:"serif"}}>Serif</option>
          <option value="sans-serif" style={{fontFamily:"sans-serif"}}>Sans serif</option>
        </select>
        <div>
        <Switch onChange={toggleTheme} checked={theme === "dark"}/>
        <DarkModeOutlinedIcon/>
        </div>
      </div>
    </div>
  )
}