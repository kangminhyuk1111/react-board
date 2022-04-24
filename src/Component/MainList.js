import React, { useEffect, useState } from 'react'

function MainList(props) {
  const postList = props.currentPost.map((data, index) => (
    <tr key={index}>
      <td>{data.number}</td>
      <td>{data.title}</td>
      <td>{data.content}</td>
      <td>{data.id}</td>
      <td>{data.data}</td>
      <td>{data.hit}</td>
    </tr>
  )
  )
  return (
    <div className='mainList'>
      <p>총 게시글 : {props.boardList.length}</p>
      <table>
        <th>게시물 번호</th>
        <th>제목</th>
        <th>내용</th>
        <th>작성자</th>
        <th>게시 날짜</th>
        <th>조회수</th>
        {postList}
      </table>
    </div>
  )
}

export default MainList;
