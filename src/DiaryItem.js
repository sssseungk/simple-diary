import React, { useEffect, useRef, useState } from 'react'

function DiaryItem({
  author, 
  content, 
  created_date, 
  emotion, 
  id, 
  // 최적화 해야하는 함수 2개
  onRemove, 
  onEdit,
}) {
  const [isEdit, setIsEdit] = useState(false);   // 수정중인지 확인하는 상태
  const [localContent, setLocalContent] = useState(content);    // 수정한 텍스트
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const localContentInput = useRef();     // 수정하는 텍스트 조건 맞지 않을 때 포커스 이동시키기 위함

  // 삭제 버튼 클릭 이벤트 함수
  const handleRemove = () => {
    if(window.confirm(`${id}번째 일기를 삭제하시겠습니까?`)){
      onRemove(id);
    }
  }

  // 수정 취소 함수
  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  }

  // 수정 함수
  const handleEdit = () => {
    if(localContent.length < 5){
      localContentInput.current.focus();
      return;
    }

    if(window.confirm(`${id}번 째 일기를 수정하시겠습니까?`)){
      onEdit(id, localContent);
      toggleIsEdit();
    }
  }

  return (
    <div className='DiaryItem'>
      <span>
        작성자 : {author} | 감정점수 : {emotion}
      </span>
      <br/>
      <span className="date">{new Date(created_date).toLocaleString()}</span>
      <div className='content'>
        {isEdit ? (
          <>
            <textarea 
              value={localContent} 
              onChange={(e) => setLocalContent(e.target.value)}
              ref={localContentInput}
            />
          </>
        ) : (
          <>
            {content}
          </>
        )}  
      </div>
      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
      
    </div>
  )
}

// 최적화 1
export default React.memo(DiaryItem);