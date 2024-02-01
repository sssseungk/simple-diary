import React, { useState } from 'react'

function DiaryEditor() {

  const [state, setState] = useState({
    author: "",      // 일기 작성자 상태
    content: "",     // 일기 내용 상태
  });   

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value,
    })
  }

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
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content}
          onChange={handleChangeState}  
        />
      </div>
    </div>
  )
}

export default DiaryEditor;