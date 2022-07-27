import React, {useEffect, useState} from 'react'

function Loading() {
  const [isLoaded, SetIsLoaded] = useState(false)
  const [loc, setLoc] = useState()
  const [subLoc, setSubLoc] = useState([])


  useEffect(()=> {
    //컴포넌트가 렌더링될때 실행될 함수 
    //데이터 가지고오기 요청보내고, 데이터가 오면 isLoaded = true

    setTimeout(() => {
      SetIsLoaded(true)
    }, 3000 )

  }, [])


  //로딩이 완료로 변하면 ~~가 실행되도록!!
  useEffect(() => {
    //업데이트될 때 실행할 함수 + 처름 컴포넌트가 렌더링될때도 실행이 된다! 
    if( loc ==='서울'){
      setSubLoc(['서초, 강남'])
    } else if(loc ==='부산'){
      setSubLoc(['해운대, 수영'])
    }
  }, [loc]) //text를 안넣었다고 워닝이뜨는데, 변하지 않을 값이라면 추가하지 않아도됨. 동일한 상태를 바꾸면서 디펜던시로 보고있지 않은지 주의해서 작성하기.. 아니면 재귀..

  return (
    <div>
      {isLoaded ? 
        <>
        로딩완료
        <button onClick={() => setLoc('서울')}>서울</button>
        <button onClick={() => setLoc('부산')}>부산</button>
        <p>현재 지역: {loc}</p>
        <p>세부 지역: {subLoc}</p>
        </>: 
        <>
          로딩 중...
        </>}
  
    </div>
  )
}

export default Loading