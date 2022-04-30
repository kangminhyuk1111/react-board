import React, { useState } from 'react'
import { ButtonGroup , Button } from 'react-bootstrap';

function Pagination(props) {
    const [postPerPage, setPostPerPage] = useState(10);
    const [currentPage, setcurrentPage] = useState(1);
    const pages = [];
    const pageNums = Math.ceil(props.boardList.length / postPerPage);
    for (let i = 1; i <= pageNums; i++) {
        pages.push(i)
    }

    const setPageNums = (page) =>{
        setcurrentPage(page)
        props.currentPost(props.boardList);
    }

    const postBtn = pages.map(page => <Button
        variant='secondary'
        key={page}
        className='page' onClick={() => {setPageNums(page)
        props.setcurrentPage(page)}}
    >{page}</Button>)

    return (
        <div className='pagination'>
            <ButtonGroup>
            {postBtn}
            </ButtonGroup>
        </div>
    )
}

export default Pagination;
