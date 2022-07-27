import React , {useEffect, useState} from 'react'

function Timer({s}) {
  const [seconds, setSeconds]  = useState(s)
  const [isStart, setIsStart]  =  useState(false)
  const startTimer = () => {
    setIsStart(true)
  }
  
  useEffect(()=> {
    if(isStart) {
      const countDown = setTimeout(()=> {setSeconds(seconds-1)},1000)
      return () => clearTimeout(countDown)
    }    
  },[seconds, isStart])
  return (
    <div>
      <button onClick={() => setIsStart(true)}>시작!</button>
      <button onClick={() => setIsStart(false)}>중지</button>
      <div>{seconds}</div>
    </div>
  )
}

export default Timer