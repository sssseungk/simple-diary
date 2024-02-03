import React from 'react'

function DiaryItem({author, content, created_date, emotion, id, onRemove}) {

  const onClick = () => {
    if(window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)){
      onRemove(id);
    }
  }
  return (
    <div className='DiaryItem'>
      <span>
        작성자 : {author} | 감정점수 : {emotion}
      </span>
      <br/>
      <span className="date">{new Date(created_date).toLocaleString()}</span>
      <div className='content'>{content}</div>
      <button onClick={onClick}>삭제하기</button>
    </div>
  )
}

export default DiaryItem;