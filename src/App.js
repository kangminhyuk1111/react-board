import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './Component/View';
import Write from './Component/Write';
import Main from './Component/Main';
import Login from './Component/Login';
import Search from './Component/Search';
import './App.css';
import axios from 'axios';


//yarn add express
//yarn add axios
//yarn add react-router-dom
//yarn add react-router
//yarn add mysql
function App(props) {
  const [boardList, setBoardList] = useState([]);
  const [searchData , setSearchData] = useState([]);
  const [writeNumber , setWriteNumber] = useState(0);

  const resData = async () => {
    const res = await axios.get('/api/BoardData')
    console.log(res.data);
    setBoardList(res.data);
  }

  const postSearchData = (data) =>{
    console.log(data);
    setSearchData(data);
  }

  // const writeNum = (number) =>{
  //   console.log("appjs"+number)
  //   setWriteNumber(number);
  // }

  useEffect(() => {
    resData()
    console.log("!");
  }, [])

  return (
    <div classtitle='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/postWrite' element={<Write boardList={boardList}/>}></Route>
          <Route exact path='/postView/:postNum' element={<View boardList={boardList}/>}></Route>
          <Route exact path='/' element={<Main boardList={boardList}
          postSearchData={postSearchData}/>}></Route>
          <Route exact path='/login' element={<Login/>}></Route>
          <Route exact path='/search' element={<Search searchData={searchData}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
