import React, { useEffect, useState } from 'react'
import MainList from './MainList';
import Pagination from './Pagination';
import axios from 'axios';

function Main(props) {
    const [postPerPage, setPostPerPage] = useState(5);
    const [currentPage, setcurrentPage] = useState(1);
    const [slicePost, setSlicePost] = useState([]);

    const currentPost = (posts) => {
        const indexOfLast = postPerPage * currentPage;
        const indexOfFirst = indexOfLast - postPerPage;
        const slicePost = posts.slice(indexOfFirst, indexOfLast)
        return slicePost;
    }

    return (
        <div className='main_page'>
            <MainList boardList={props.boardList}
                currentPost={currentPost(props.boardList)}
                slicePost={slicePost}
                postPerPage={postPerPage}></MainList>
            <Pagination boardList={props.boardList}
                setcurrentPage={setcurrentPage}
                currentPost={currentPost}></Pagination>
            <a href='/postWrite'>글작성</a>
        </div>
    )
}

export default Main;