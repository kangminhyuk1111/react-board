import React from 'react'
import { Link } from 'react-router-dom';
import '../css/view.css';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import axios from 'axios';

function View(props) {
  const params = window.location.pathname.split('/');
  const viewPost = []
  for (let i = 0; i < props.boardList.length; i++) {
    if (props.boardList[i].number === Number(params[2])) {
      viewPost.push(props.boardList[i])
    }
  }
  console.log(viewPost);
  const mapViewPost = viewPost.map(data => {
    return (
      <div key={data.number}>
        <p className='view_number'>{data.number}</p>
        <p className='view_title'>{data.title}</p>
        <p className='view_content'>{data.content}</p>
        <p className='view_id'>{data.id}</p>
        <p className='view_data'>{data.data}</p>
        <p className='view_hit'>{data.hit}</p>
      </div>
    )
  })

  const updateHit = async() =>{
    console.log(document.location.pathname)
    const docParams = document.location.pathname 
    const req = await axios.post(docParams);
  }

  useEffect(()=>{
    updateHit()
  },)
  
  return (
    <Box sx={{
      width: '700px',
      bgcolor: '#cfe8fc', height: '600px', backgroundColor: '#fff', margin: '0 auto',
      paddingTop: '10px', textAlign: 'center', marginTop: '70px', borderRadius: '20px',
      boxShadow: '4px 4px 4px 4px gray'
    }}>
      <div className='view'>
        <div className='view_left'>
          <p>글번호</p>
          <p>제목</p>
          <p className='view_content'>내용</p>
          <p>작성자</p>
          <p>작성일</p>
          <p>조회수</p>
        </div>
        <div className='view_right'>
          {mapViewPost}
        </div>
      </div>
      <Link to='/'>목록</Link>
    </Box>
  )
}

export default View;