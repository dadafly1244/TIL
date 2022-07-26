import First from './components/First';
import Intro from './components/Intro';
import Clock from './components/Clock';
import Board from './components/Board';
import SetTimezone from './components/SetTimezone';


function App() {
  return (
    <div>
      <SetTimezone />
      <Board selecCategory="드라마" />
      <Board selecCategory="영화" />
      <Clock timezone="Asia/Seoul" buttonTimezone="Us/Pacific" />
      <Clock timezone="Asia/Taipei" buttonTimezone="Us/Pacific" />
      <First name="양다영" number={7}/>
      <Intro name="양다영" age={26} email="이메일이메일@hanmail.net" discription="안녕하세요!" />
      <Intro age={26} email="이메일이메일@hanmail.net" discription="안녕하세요!" />
    </div>
  );
}

export default App;
