import React, { useEffect, useState } from 'react'
import MainList from './MainList';
import Pagination from './Pagination';
import axios from 'axios';

function Main(props) {
    const [postPerPage, setPostPerPage] = useState(5);
    const [currentPage, setcurrentPage] = useState(1);
    const [slicePost, setSlicePost] = useState([]);
    const [boardList,setBoardList] = useState([])

    const currentPost = (posts) => {
        const indexOfLast = postPerPage * currentPage;
        const indexOfFirst = indexOfLast - postPerPage;
        const slicePost = posts.slice(indexOfFirst, indexOfLast)
        return slicePost;
    }

    const resData = async() =>{
        const res = await axios.get('/api/boardData')
        console.log(res.data);
        setBoardList(res.data);
    }

    useEffect(() => {
        resData()
    }, [])

    return (
        <div className='main_page'>
            <MainList boardList={boardList}
                currentPost={currentPost(boardList)}
                slicePost={slicePost}
                postPerPage={postPerPage}></MainList>
            <Pagination boardList={boardList}
                setcurrentPage={setcurrentPage}
                currentPost={currentPost}></Pagination>
        </div>
    )
}

export default Main;