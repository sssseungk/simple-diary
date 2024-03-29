import { useCallback, useEffect, useMemo, useReducer, useRef } from 'react'
import DiaryEditor from './DiaryEditor';
import './App.css';
import DiaryList from './DiaryList';

const reducer = (state, action) => {
  switch(action.type){
    case 'INIT': {
      return action.data
    }
    case 'CREATE': {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date
      }
      return [newItem, ...state];
    }
    case 'REMOVE': {
      return state.filter((it) => it.id !== action.targetId);
    }
    case 'EDIT': {
      return state.map((it) => 
        it.id === action.targetId ? 
        {...it, content: action.newContent} : it);
    }
    default:
    return state;
  }
}

function App() {
  // const [data, setData] = useState([]);
  // ! useReducer를 활용한 상태변화 로직 분리 (useState 대신)
  const [data, dispatch] = useReducer(reducer, []);
  const dataId = useRef(0);
  
  // 컴포넌트 mount 시점에 API 호출하여 comment 데이터 받아오는 함수
  const getData = async() => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
    ).then((res)=>res.json());

    // api로 받아온 데이터로 일기 데이터의 초기값 설정하기
    const initData = res.slice(0, 20).map((it)=>{
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random()*5)+1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      }
    });   
    dispatch({type:"INIT", data:initData})
  }

  useEffect(() => {
    getData();
  }, [])


  // 일기 생성 함수
  const onCreate = useCallback((author, content, emotion) => {
    dispatch({type: 'CREATE', data:{author, content, emotion, id:dataId.current}})
    dataId.current += 1;
  }, []);
  
  // 일기 삭제 함수
  // 최적화 2
  const onRemove = useCallback((targetId) => {
    dispatch({type: 'REMOVE', targetId})
  }, []);

  // 일기 수정 함수
  // 최적화 2
  const onEdit = useCallback((targetId, newContent) => {
    dispatch({type: 'EDIT', targetId, newContent})
  }, []);

  // React.memo를 활용한 함수 연산 최적화 (값처럼 사용함)
  const getDiaryAnalysis = useMemo(
    () => {
    // 감정이 3 이상인 일기의 수, 2 이하의 일기의 수, 좋은 감정 일기 비율
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return {goodCount, badCount, goodRatio};
  }, [data.length]);

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;


  return (
    <div className='App'>
      <DiaryEditor onCreate={onCreate}/>
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList diaryList={data} onRemove={onRemove} onEdit={onEdit}/>
    </div>
  )
}

export default App;