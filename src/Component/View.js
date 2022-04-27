import React from 'react'
import { Link } from 'react-router-dom';

function View(props) {
  const params = window.location.pathname.split('/');
  const viewPost = []
  for(let i=0;i<props.boardList.length;i++){
    if(props.boardList[i].number === Number(params[2])){
      viewPost.push(props.boardList[i])
    }
  }
  console.log(viewPost);
  const mapViewPost = viewPost.map(data => {
    return(
    <div key={data.number}>
      <p>{data.number}</p>
      <p>{data.title}</p>
      <p>{data.content}</p>
      <p>{data.id}</p>
      <p>{data.data}</p>
      <p>{data.hit}</p>
    </div>
    )
  })
  return (
    <div className='view'>
      {mapViewPost}
      <Link to='/'>목록</Link>
    </div>
  )
}

export default View;