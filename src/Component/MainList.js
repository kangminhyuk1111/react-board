import React, { useEffect, useState } from 'react'

function MainList(props) {
  const postList = props.currentPost.map((data, index) => (
      <tr key={index}>
        <td>{data.id}</td>
        <td>{data.name}</td>
      </tr>
    )
  )
  return (
    <div className='mainList'>
      <table>
        <th>제목</th>
        <th>작성자</th>
        {postList}
      </table>
    </div>
  )
}

export default MainList;
