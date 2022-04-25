import React from 'react'

function View(props) {
  const viewPost = props.boardList.map((data,index)=>(
  <div key={index}>
    <p>{data.number}</p>
    <p>{data.title}</p>
    <p>{data.content}</p>
    <p>{data.data}</p>
    <p>{data.id}</p>
    <p>{data.hit}</p>
  </div>
  ))
  return (
      <div className='view'>
        {viewPost}
      </div>
  )
}

export default View;