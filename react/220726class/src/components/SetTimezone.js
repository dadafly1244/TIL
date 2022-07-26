import React, {useState} from 'react'
import moment from 'moment-timezone'

function SetTimezone() {
  const [timezones, setTimezones] = useState([{id: 1, tz: "Asia/Seoul"},{id: 2, tz: "Asia/Taipei"}, {id: 3, tz: "America/New_York"}, {id: 4, tz: "America/Los_Angeles" }])
  const deleteCityHandler = (cityTZ) => {
    setTimezones(timezones.filter((element)=> (element.tz !== cityTZ)))
  }
  return (
    <div>
      {
        timezones.map((timezone)=> {
          return (
            <div key={timezone.id}>
              <div>{timezone.tz}</div>
              <div>{moment().tz(timezone.tz).format('YYYY-MM-DD HH:mm:ss')}</div>
              <button onClick={()=> deleteCityHandler(timezone.tz)}>삭제하기</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default SetTimezone