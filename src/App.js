import React from 'react'
import DiaryEditor from './DiaryEditor';
import './App.css';
import DiaryList from './DiaryList';

const dummyList = [
  {
    id: 1,
    author: "김승연",
    content: "안뇽",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "김씅연",
    content: "안뇽",
    emotion: 3,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "씅욘",
    content: "안뇽",
    emotion: 4,
    created_date: new Date().getTime(),
  }
]


function App() {
  return (
    <div className='App'>
      <DiaryEditor/>
      <DiaryList diaryList={dummyList}/>
    </div>
  )
}

export default App;