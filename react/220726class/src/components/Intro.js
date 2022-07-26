import React, {useState} from 'react'

function Intro(props) {
  const {name, age, email,discription } = props

  const [test, setTest] = useState(0)
  const countUp = () => {
    setTest(test + 1)
  }
  const countDown = () => {
    setTest(test - 1)
  }

  return (
    <div>
      <div>
        {test}
        <button onClick={countUp}>카운트업!! </button>
        <button onClick={countDown}>카운트다운!! </button>
      </div>
      {discription}!! 저는 {name}이고, {age}살 입니다.  {email}로 연락주세요!! 
    </div>
  )
}

Intro.defaultProps = {
  name: '기본 이름'
}

export default Intro