import React, {useState} from 'react'

function Handlers() {
  const [number, setNumber]  = useState(0)

  const changeHandler = (e) => {
    setNumber(e.target.value)
  }
  return (
    <div>
      <input onChange={changeHandler}></input>
      <p>{number}</p>
    </div>
  )
}

export default Handlers