import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Write(props) {
  const [writeInfo,setWriteInfo] = useState({
    id:'',
    title:'',
    content:'',
  })
  const inputChange = (e) =>{
    console.log(e.target.value)
    setWriteInfo({
      ...writeInfo,
      [e.target.name]:e.target.value
    })
  }
  const defaultEvent = (e) =>{
    e.preventDefault();
  }

  return (
    <div className='write'>
      <form method='post' action='/postWrite' defaultEvent={defaultEvent}>
        <input type='text' placeholder='제목 입력' name='title' onChange={inputChange}/>
        <textarea type='text' placeholder='글 입력' name='content' onChange={inputChange}/>
        <input type='text' placeholder='id 입력' name='id' onChange={inputChange}/>
        <Link to='/'>
        <input type='submit' value='저장'/>
        </Link>
      </form>
      <a href='/'>게시글</a>
    </div>
    )
}

export default Write;