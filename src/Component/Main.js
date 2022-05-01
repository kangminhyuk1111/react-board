import React, { useEffect, useState } from 'react'
import MainList from './MainList';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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

    const resetBoard = () => {
        props.resData();
    }


    // const logIn = () =>{
    //     if(sessionStorage.getItem('id') != null){
    //         return logRender = <p>환영합니다 {sessionStorage.getItem('id')}님 !</p>
    //     }else{
    //         return logRender =  null;
    //     }
    // }
    useEffect(() => {
        console.log(sessionStorage.getItem('id'));
        // logIn();
    }, [])

    return (
        <div className='main_page'>
            <div className='main_list_page'>
                <nav className='nav_bar'>
                    <div class='search_div'>
                        <TextField id="outlined_basic" label="검색어를 입력해주세요" variant="outlined"
                            type='text' name='searchText' onChange={inputChange} />
                        <a href='/search' className='atg' onClick={(e) => e.preventDefault()}>
                            <Button id='search_btn' variant='contained' type='submit' onClick={postSearchData}>
                                검색
                            </Button>
                        </a>
                    </div>
                    <div class='member_div'>
                        <Link to="/Signup"><Button>회원가입</Button></Link>
                        <Link to="/login"><Button>로그인</Button></Link>
                        <a href="/" onClick={() => logOut()}><Button>로그아웃</Button></a>
                        <a href='/'><AccountCircleIcon id='user_icon'></AccountCircleIcon></a>
                        {sessionStorage.getItem('id')}
                    </div>
                </nav>
                <MainList boardList={props.boardList}
                    currentPost={currentPost(props.boardList)}
                    slicePost={slicePost}
                    postPerPage={postPerPage}></MainList>
            </div>
            <div class='post_button_div'>
                <Button id='post_button' variant='contained' onClick={() => onlyMemberPosting()}>글쓰기</Button>
                <Button variant='contained' onClick={resetBoard}>전체보기</Button>
            </div>
            <p className='allPost'>총 게시글 : {props.boardList.length}</p>
            <Pagination boardList={props.boardList}
                setcurrentPage={setcurrentPage}
                currentPost={currentPost}></Pagination>
        </div>
    )
}

export default Main;