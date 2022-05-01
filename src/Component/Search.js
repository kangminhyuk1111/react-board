import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Search(props) {
  console.log(props)
  const postList = props.searchData.map((data, index) => (
    <tr key={index}>
      <td>{data.number}</td>
      <td><a>{data.title}</a></td>
      <td>{data.id}</td>
      <td>{data.data}</td>
      <td>{data.hit}</td>
    </tr>
  )
  )
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>게시물 번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>게시 날짜</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {postList}
        </tbody>
      </table>
      <Link to='/'>목록</Link>
    </div>
  )
}
