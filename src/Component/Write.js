import axios from 'axios'
import React, { useState } from 'react'

function Write() {
  const [writeInfo,setWriteInfo] = useState({
    title:'',
    textarea:'',
  })

  const inputChange = (e) =>{
    console.log(e.target.value)
    setWriteInfo({
      ...writeInfo,
      [e.target.name]:e.target.value
    })
  }

  const reloadBan = (e) =>{
    e.preventDefault();
  }

  const writeSend = () =>{
    const newWrite = axios.create();
    newWrite.post = ('/postWrite',writeInfo)
  }
  return (
    <div className='write'>
      <form action='/postWrite'>
        <input type='text' placeholder='제목 입력' name='title' onChange={inputChange}/>
        <textarea type='text' placeholder='글 입력' name='textarea' onChange={inputChange}/>
        <input type='submit' value='저장' onClick={writeSend}/>
      </form>
    </div>
    )
}

            export default Write;