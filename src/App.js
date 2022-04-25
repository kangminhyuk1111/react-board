import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './Component/View';
import Write from './Component/Write';
import Main from './Component/Main';
import './App.css';
import axios from 'axios';


//yarn add express
//yarn add axios
//yarn add react-router-dom
//yarn add react-router
//yarn add mysql
function App(props) {
  const [boardList, setBoardList] = useState([]);

  const resData = async () => {
    const res = await axios.get('/api/BoardData')
    console.log(res.data);
    setBoardList(res.data);
  }

  useEffect(() => {
    resData()
  }, [])

  return (
    <div classtitle='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/postWrite' element={<Write boardList={boardList}/>}></Route>
          <Route exact path='/postView' element={<View boardList={boardList}/>}></Route>
          <Route exact path='/' element={<Main boardList={boardList} />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
