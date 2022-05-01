import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import View from './Component/View';
import Write from './Component/Write';
import Main from './Component/Main';
import Signup from './Component/Signup';
import Search from './Component/Search';
import Login from './Component/Login';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



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
    console.log('postSearchData(App)');
    console.log(data);
    //setSearchData(data);
    setBoardList(data);
  }

  // const writeNum = (number) =>{
  //   console.log("appjs"+number)
  //   setWriteNumber(number);
  // }

  useEffect(() => {
    resData()
  }, [])

  return (
    <div classtitle='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/postWrite' element={<Write boardList={boardList}/>}></Route>
          <Route exact path='/postView/:postNum' element={<View boardList={boardList}/>}></Route>
          <Route exact path='/' element={<Main boardList={boardList}
          postSearchData={postSearchData}
          resData={resData}/>}></Route>
          <Route exact path='/Signup' element={<Signup/>}></Route>
          {/* <Route exact path='/search' element={<Search searchData={searchData}/>}></Route> */}
          <Route exact path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
