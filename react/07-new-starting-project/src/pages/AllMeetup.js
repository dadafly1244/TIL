import { useState, useEffect } from "react";
import MeetupList from "../component/meetups/MeetupList";

function AllMeetupPage() {
  const [isLoading, setIsLoading] = useState(true) //isLoading는 현재의 상태, setIsLoading 상태를 업데이트하는 함수 
  const [loadingMeetups, setLoadingMeetups] = useState([])

  useEffect(()=>{
    setIsLoading(true)
    fetch(
      'https://react-getting-started-1d51b-default-rtdb.firebaseio.com/meetups.json'
      ).then(response => {
        return response.json()
      }).then(data=> {
        const meetups = []

        for (const key in data){
          const meetup = {
            id: key,
            ...data[key]
          } 
          meetups.push(meetup)
        }

        setIsLoading(false)
        setLoadingMeetups(meetups)
      })
  }, [])//첫번째 인수로 함수, 두번째 인수로 의존형 배열: 만약 빈배열이라면 의존성이 없어서 한번만 실행되고 끝난다. 하지만 만약 isLoading이있다면 isLoading의 상태가 변할때만다 실행된다. 

 

    if(isLoading) {
      return(
        <section>
          <p>Loading....</p>
        </section>
      )
    }
  return <section>
    <h1>All Meetups</h1>
    <MeetupList meetups={loadingMeetups} />

  </section>
}

export default AllMeetupPage;

