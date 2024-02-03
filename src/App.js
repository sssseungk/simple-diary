import React, { useRef, useState } from 'react'
import DiaryEditor from './DiaryEditor';
import './App.css';
import DiaryList from './DiaryList';


function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion, 
      created_date,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data]);
  }
  

  return (
    <div className='App'>
      <DiaryEditor onCreate={onCreate}/>
      <DiaryList diaryList={data}/>
    </div>
  )
}

export default App;