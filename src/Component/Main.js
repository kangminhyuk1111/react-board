import React, { useState } from 'react'
import MainList from './MainList';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Main(props) {
    const [postPerPage, setPostPerPage] = useState(10);
    const [currentPage, setcurrentPage] = useState(1);
    const [slicePost, setSlicePost] = useState([]);
    const [searchText, setSearchText] = useState('')
    const [searchData, setSearchData] = useState([]);

    const currentPost = (posts) => {
        const indexOfLast = postPerPage * currentPage;
        const indexOfFirst = indexOfLast - postPerPage;
        const slicePost = posts.slice(indexOfFirst, indexOfLast)
        return slicePost;
    }

    const inputChange = (e) => {
        console.log(e.target.value)
        setSearchText(e.target.value);
    }

    const postSearchData = async () => {
        console.log("/api/search")
        console.log(searchText)
        const req = await axios.post("/api/search/" + searchText);
        console.log(req.data.searchData);
        props.postSearchData(req.data.searchData);
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
            <input type='text' placeholder='검색어를 입력해주세요' name='searchText' onChange={inputChange} />
            <button type='submit' onClick={postSearchData}><Link to='/search'>검색</Link></button>
            <Link to='/postWrite'>글작성</Link>
            <Link to="/Signup">회원가입</Link>
            <Link to="/login">로그인</Link>
        </div>
    )
}

export default Main;