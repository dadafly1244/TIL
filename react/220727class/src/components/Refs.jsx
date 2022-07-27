import React, {useRef} from 'react'

function Refs() {
  const inputRef = useRef()
  const keyHandler = (e) => {
    if(e.key === 'Enter') {
      console.log(inputRef.current.value)
    }
  }
  return (
    <div>
      <input ref={inputRef} onKeyDown={keyHandler}/> {/*getElementById와 같은느낌 */}
    </div>
  )
}

export default Refs