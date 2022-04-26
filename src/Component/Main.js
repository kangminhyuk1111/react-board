import React, { useState } from 'react'
import MainList from './MainList';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';

function Main(props) {
    const [postPerPage, setPostPerPage] = useState(5);
    const [currentPage, setcurrentPage] = useState(1);
    const [slicePost, setSlicePost] = useState([]);
    const [searchText, setSearchText] = useState({ search: '' })

    const currentPost = (posts) => {
        const indexOfLast = postPerPage * currentPage;
        const indexOfFirst = indexOfLast - postPerPage;
        const slicePost = posts.slice(indexOfFirst, indexOfLast)
        return slicePost;
    }

    const inputChange = (e) => {
        console.log(e.target.value)
        setSearchText({
            ...searchText,
            [e.target.name]: e.target.value
        })
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
            <form method='post' action='/search'>
                <input type='text' placeholder='검색어를 입력해주세요' name='search' onChange={inputChange} />
                <Link to='/search'>
                <button type='submit'>검색</button>
                </Link>
            </form>
            <a href='/postWrite'>글작성</a>
        </div>
    )
}

export default Main;