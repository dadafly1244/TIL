import { useNavigate } from "react-router-dom";
import NewMeetupForm from '../component/meetups/NewMeetupForm'

function NewMeetupPage() {
  let navigate = useNavigate()
  function addMeetupHandler(meetupdata) {
    fetch(
      'https://react-getting-started-1d51b-default-rtdb.firebaseio.com/meetups.json', //firebase는 주소뒤에 json을 붙여야한다.
      {
        method:'POST',
        body: JSON.stringify(meetupdata),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      ).then(()=> {
        navigate("../", { replace: true });
      })

  }
  return <section>
    <h1>ADD NEW Meetup</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>
  </section>
}

export default NewMeetupPage;