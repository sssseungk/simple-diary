import React, { useState } from 'react'

function DiaryEditor() {

  const [state, setState] = useState({
    author: "",      // 일기 작성자 상태
    content: "",     // 일기 내용 상태
  });   

  const authorChange = (e) => {
    setState({
      ...state,      // spread 연산자 사용 
      author: e.target.value,
    })
  }

  const contentChange = (e) => {
    setState({
      ...state,
      content: e.target.value,
    })
  }

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          value={state.author}
          onChange={authorChange}
        />
      </div>
      <div>
        <textarea
          value={state.content}
          onChange={contentChange}  
        />
      </div>
    </div>
  )
}

export default DiaryEditor;