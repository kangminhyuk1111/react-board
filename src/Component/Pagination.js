import React, { useState } from 'react'

function Pagination(props) {
    const [postPerPage, setPostPerPage] = useState(10);
    const [currentPage, setcurrentPage] = useState(1);
    const pages = [];
    const pageNums = Math.ceil(props.personList.length / postPerPage);
    for (let i = 1; i <= pageNums; i++) {
        pages.push(i)
    }

    const setPageNums = (page) =>{
        alert(page)
        setcurrentPage(page)
        props.currentPost(props.personList);
    }

    const postBtn = pages.map(page => <button
        key={page}
        className='page' onClick={() => {setPageNums(page)
        props.setcurrentPage(page)}}
    >{page}</button>)

    return (
        <div className='pagination'>
            {postBtn}
        </div>
    )
}

export default Pagination;
