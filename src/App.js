import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './Component/View';
import Write from './Component/Write';
import Main  from './Component/Main';
import './App.css';

function App() {
  const [personList, setPersonList] = useState([{ id: 0, name: 'name0' },
  { id: 1, name: 'name1' },
  { id: 2, name: 'name2' },
  { id: 3, name: 'name3' },
  { id: 4, name: 'name4' },
  { id: 5, name: 'name5' },
  { id: 6, name: 'name6' },
  { id: 7, name: 'name7' },
  { id: 8, name: 'name8' },
  { id: 9, name: 'name9' },
  { id: 10, name: 'name10' },
  { id: 11, name: 'name11' },
  { id: 12, name: 'name12' },
  { id: 13, name: 'name13' },
  { id: 14, name: 'name14' },
  { id: 15, name: 'name15' },
  { id: 16, name: 'name16' },
  { id: 17, name: 'name17' },
  { id: 18, name: 'name18' },
  { id: 19, name: 'name19' },
  { id: 20, name: 'name20' },
  { id: 21, name: 'name21' },
  { id: 22, name: 'name22' },
  { id: 23, name: 'name23' },
  { id: 24, name: 'name24' },
  { id: 25, name: 'name25' },
  { id: 26, name: 'name26' },
  { id: 27, name: 'name27' },
  { id: 28, name: 'name28' },
  { id: 29, name: 'name29' },
  { id: 30, name: 'name30' }]);
  console.log(personList);
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/postWrite' element={<Write />}></Route>
          <Route exact path='/postView' element={<View />}></Route>
          <Route exact path='/' element={<Main personList={personList}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
