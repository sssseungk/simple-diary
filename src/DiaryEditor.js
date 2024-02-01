import React, { useState } from 'react'

function DiaryEditor() {

  const [state, setState] = useState({
    author: "",      // 일기 작성자 상태
    content: "",     // 일기 내용 상태
    emotion: 1,      // 감정 기분
  });   

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name] : e.target.value,
    })
  }

  const handleSubmit = (e) => {
    console.log(state);
    alert('저장 성공');
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
      <div>
        <select 
          name="emotion" 
          value={state.emotion} 
          onChange={handleChangeState}
        >
          <option value={1}>😭</option>
          <option value={2}>😢</option>
          <option value={3}>😐</option>
          <option value={4}>😊</option>
          <option value={5}>😃</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  )
}

export default DiaryEditor;