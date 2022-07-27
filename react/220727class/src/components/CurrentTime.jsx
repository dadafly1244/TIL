import React, {useEffect, useState} from 'react'
import moment from 'moment-timezone'

function CurrentTime() {
  const [cur, setCur] = useState(moment().format('YYYY-MM-DD HH:mm:ss'))

  useEffect(()=> {
    setTimeout(()=>setCur(moment().format('YYYY-MM-DD HH:mm:ss')) ,1000)
    
  },[cur])

  return (
    <div>
      {cur}
    </div>

  )
}

export default CurrentTime