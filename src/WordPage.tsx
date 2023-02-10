import React, { ChangeEvent,KeyboardEventHandler, useState } from "react"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TextField from '@mui/material/TextField';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import { IWord } from "./interfaces";
import { Meaning,Definition } from "./interfaces";

export default function WordPage(){
  const [word,setWord]=useState<string>("")
  const [search,setSearch]=useState<boolean>(false)
  const [info,setInfo]=useState<IWord>({} as IWord)
  const [mean,setMean]=useState<Meaning[]>([])

  const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  const audioURL=`https://api.dictionaryapi.dev/media/pronunciations/en/${word}-us.mp3`

  const handleChange=(event:ChangeEvent<HTMLInputElement>)=>{
    setWord(event.target.value)
  }
  const handleClick=async()=>{
    const response=await fetch(url)
    const data=await response.json()
    setInfo(data[0])
    setMean(data[0].meanings)
    setSearch(true)
  }
  const handleListen=()=>{
    let audio=new Audio(audioURL)
    audio.play()
  }
  
  return (
    <div className="container">
      <div className="input__area">
      <TextField className="input" id="standard-basic" label="Search a word" variant="standard" onChange={handleChange}/>
      <SearchOutlinedIcon onClick={handleClick}/>
      </div>
      <div className="word__play">
        <div className="word">
        <h1>{info.word}</h1>
        <p>{info.phonetic}</p>
        </div>
        {search && <PlayCircleOutlineOutlinedIcon onClick={handleListen}/>}
      </div>
      {mean.map((data:Meaning,key:number)=>{
        return (<div className="word__meaning">
        <h3 className="word__meaning__title">{data.partOfSpeech}</h3>
        <hr></hr>
        <p className="word__meaning__mean">Meaning</p>
        <ul>
          {data.definitions.map((item: Definition,key:number)=>{
          return <li>{item.definition}</li>
        })}</ul>
      </div>)
      })}
    </div>
  )
}