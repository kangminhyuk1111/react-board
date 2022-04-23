import React, { useState } from 'react'
import MainList from './MainList';
import Pagination from './Pagination';

function Main(props) {
    const [postPerPage, setPostPerPage] = useState(10);
    const [currentPage, setcurrentPage] = useState(1);
    const [slicePost , setSlicePost] = useState([]);

    const currentPost = (posts) => {
        const indexOfLast = postPerPage * currentPage;
        const indexOfFirst = indexOfLast - postPerPage;
        const slicePost = posts.slice(indexOfFirst, indexOfLast)
        return slicePost;
      }
    return (
        <div className='main_page'>
            <MainList personList={props.personList}
                currentPost={currentPost(props.personList)}
                slicePost={slicePost}></MainList>
            <Pagination personList={props.personList}
                setcurrentPage={setcurrentPage}
                currentPost={currentPost}></Pagination>
        </div>
    )
}

export default Main;