import React, { useEffect, useState } from 'react'
import MainList from './MainList';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Button , FormControl } from 'react-bootstrap';

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

    const onlyMemberPosting = () => {
        if (sessionStorage.getItem('id') === null) {
            alert("회원만 작성할 수 있습니다.")
            document.location.href = '/';
        } else {
            document.location.href = '/postWrite';
        }
    }

    const logOut = () => {
        const logout = window.confirm("로그아웃 하시겠습니까?");
        if (logout == true) {
            sessionStorage.clear();
        } else {
            document.location.href = '/';
        }
    }
    useEffect(() => {
        console.log(sessionStorage.getItem('id'));
    })

    return (
        <div className='main_page'>
            <div className='main_list_page'>
                <nav className='nav_bar'>
                    <div class='search_div'>
                        <FormControl type='text' placeholder='검색어를 입력해주세요' name='searchText' onChange={inputChange} />
                        <Button variant='secondary' type='submit' onClick={postSearchData}><Link to='/search'>검색</Link></Button>
                    </div>
                    <p>환영합니다 {sessionStorage.getItem('id')}님 !</p>
                    <div class='member_div'>
                        <Link to="/Signup">회원가입</Link>
                        <Link to="/login">로그인</Link>
                        <a href="/" onClick={() => logOut()}>로그아웃</a>
                    </div>
                </nav>
                <MainList boardList={props.boardList}
                    currentPost={currentPost(props.boardList)}
                    slicePost={slicePost}
                    postPerPage={postPerPage}></MainList>
            </div>
            <div class='post_button_div'>
                <Button class='post_button' variant='secondary' onClick={() => onlyMemberPosting()}>글작성</Button>
            </div>
            <p className='allPost'>총 게시글 : {props.boardList.length}</p>
            <Pagination boardList={props.boardList}
                setcurrentPage={setcurrentPage}
                currentPost={currentPost}></Pagination>
        </div>
    )
}

export default Main;