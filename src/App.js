import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/header/header';
import FightPage from './pages/fight-page/fight-page';
import HomePage from './pages/home-page/home-page';
import QuestionPage from './pages/question-page/question-page';
import News from './pages/news/news'

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/fight-page' element={<FightPage/>}/>
      <Route path='/question-page' element={<QuestionPage/>}/>
      <Route path='/news' element={<News/>}/>
     </Routes>
    </div>
  );
}

export default App;
