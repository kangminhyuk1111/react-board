import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import '../css/write.css';

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

  return (
    <Box
      sx={{
        width: 700,
        height: 700,
        backgroundColor: '#fff',
        margin: '0 auto',
        borderRadius:'10px',

      }}
    >
    <div className='write'>
      <form method='post' action='/postWrite'>
        <input type='text' placeholder='제목 입력' name='title' onChange={inputChange}
        className='write_title'/>
        <textarea type='text' placeholder='글 입력' name='content' onChange={inputChange}
        className='write_textarea'/>
        <input type='text' value={sessionStorage.getItem('id')} placeholder='id 입력' name='id' onChange={inputChange}
        className='write_writer_id'/>
        <input type='submit' value='저장' onClick={()=>document.location.href='/'}
        className='write_submit'/>
        <a href='/'>목록</a>
      </form>
      
    </div>
    </Box>
    )
}

export default Write;