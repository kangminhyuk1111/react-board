import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function MainList(props) {
  const [postNum, setPostNum] = useState(0);

  const writeNum = (number) => {
    console.log(number)
    setPostNum(number)
  }

  const postList = props.currentPost.map((data, index) => (
    <TableRow key={index}>    
      <TableCell>{data.number}</TableCell>
      <TableCell><a href={`/postView/${postNum}`} onClick={() => { writeNum(data.number) }}>{data.title}</a></TableCell>
      <TableCell>{data.id}</TableCell>
      <TableCell>{data.data}</TableCell>
      <TableCell>{data.hit}</TableCell>
    </TableRow>
  )
  )

  const spliceContent = () => {
    for (let i = 0; i < props.boardList.length; i++) {
      if (props.boardList[i].content.length > 5) {
        props.boardList[i].content = props.boardList[i].content.slice(0, 4) + '...';
      }
    }
  }

  useEffect(() => {
    spliceContent()
  }, [])

  return (
    <div className='mainList'>
      <TableContainer component={Paper} aria-label="simple table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>게시물 번호</TableCell>
              <TableCell>제목</TableCell>
              <TableCell>작성자</TableCell>
              <TableCell>게시 날짜</TableCell>
              <TableCell>조회수</TableCell>
            </TableRow>
          </TableHead>
          <tbody>
            {postList}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default MainList;
