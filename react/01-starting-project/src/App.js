import Todo from './component/Todo'
import Modal from './component/Modal';
import Backdrop from './component/Backdrop';

function App(){
  return(
    <div>
      <h1>My Todos</h1>
      <Todo text='리액트 배우기' />
      <Todo text='뷰 배우기' />
      <Todo text='바닐라 배우기' />
      <Modal />
      <Backdrop />
    </div>
  );
}
export default App;

// 컴포넌트에서 return하는 값은 html처럼 보이지만 사실은 js이기 때문에 class가 아니고 className으로 작성해야한다!! 