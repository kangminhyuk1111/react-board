import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './Component/View';
import Write from './Component/Write';
import Main from './Component/Main';
import './App.css';

function App() {
  return (
    <div classtitle='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/postWrite' element={<Write />}></Route>
          <Route exact path='/postView' element={<View />}></Route>
          <Route exact path='/' element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
