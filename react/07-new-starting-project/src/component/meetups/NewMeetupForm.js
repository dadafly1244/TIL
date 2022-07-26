import { useRef } from 'react'

import classes from "./NewMeetupForm.module.css";
import Card from "../ui/Card";

function NewMeetupForm(props) {
  // DOM 엘리먼트나 클래스 컴포넌트의 인스턴스에 접근하기 위해 ref 어트리뷰트를 함수 컴포넌트에서 사용하는 것은 됨. 
  //titleInputRef은 ref 어트리뷰트를 통해서 전달되기 위해서 이곳에 정의되어야함 
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const discriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDiscription = discriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      discription: enteredDiscription
    }
    props.onAddMeetup(meetupData)
  }
 
  return <Card>
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Meetup Title</label>
        <input type="text" required id="title" ref={titleInputRef} /> 
      </div> 
      <div className={classes.control}>
        <label htmlFor="image">Meetup Image</label>
        <input type="url" required id="image" ref={imageInputRef} /> 
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" required id="address" ref={addressInputRef}/> 
      </div>
      <div className={classes.control}>
        <label htmlFor="discription">Discription</label>
        <textarea required id="discription" rows='5' ref={discriptionInputRef} ></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  </Card>
}

export default NewMeetupForm;