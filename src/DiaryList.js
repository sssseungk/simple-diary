import React from 'react'
import DiaryItem from './DiaryItem';

function DiaryList({diaryList, onDelete}) {
  console.log(diaryList);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onDelete={onDelete}/>
        ))}
      </div>
    </div>
  )
}

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;