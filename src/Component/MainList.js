import React, { useEffect, useState } from 'react';

function MainList(props) {
  const [postNum, setPostNum] = useState(0);

  const writeNum = (number) => {
    console.log(number)
    setPostNum(number)
  }
  const postList = props.currentPost.map((data, index) => (
    <tr key={index}>
      <td>{data.number}</td>
      <td><a href={`/postView/${postNum}`} onClick={()=>{writeNum(data.number)}}>{data.title}</a></td>
      <td>{data.content}</td>
      <td>{data.id}</td>
      <td>{data.data}</td>
      <td>{data.hit}</td>
    </tr>
  )
  )

  const spliceContent = () =>{
    for(let i=0;i<props.boardList.length;i++){
      if(props.boardList[i].content.length > 5){
        props.boardList[i].content = props.boardList[i].content.slice(0,4)+'...';
      }
    }
  }

  useEffect(()=>{
   spliceContent() 
  },[])

  return (
    <div className='mainList'>
      <p>총 게시글 : {props.boardList.length}</p>
      <table>
        <thead>
          <tr>
            <th>게시물 번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>작성자</th>
            <th>게시 날짜</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {postList}
        </tbody>
      </table>
    </div>
  )
}

export default MainList;
