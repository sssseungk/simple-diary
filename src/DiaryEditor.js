import React, { useState } from 'react'

function DiaryEditor() {

  const [author, setAuthor] = useState("");       // 일기 작성자 상태
  const [content, setContent] = useState("");     // 일기 내용 상태

  const authorChange = (e) => {
    setAuthor(e.target.value);
  }

  const contentChange = (e) => {
    setContent(e.target.value);
  }

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          value={author}
          onChange={authorChange}
        />
      </div>
      <div>
        <textarea
          value={content}
          onChange={contentChange}  
        />
      </div>
    </div>
  )
}

export default DiaryEditor;