import { Suspense } from 'react';
import './App.css'
import Counter from './counter';
import Batsman from './runs';
import Users from './users';
import Friends from './friends';

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())

const friendsFetch = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
}

function App() {

  const friendsPromise = friendsFetch();

  function handleCLick() {
    alert("Click");
  }

  const handleCLickThree = () => {
    alert("Hanle click three clicked");
  }

  const addBtn = (num) => {
    const newNum = num + 5;
    alert(newNum);
  }

  return (
    <>


      <Suspense fallback={<h3>friends are coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      <h3>Vite + React</h3>

      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Batsman></Batsman>
      <br />

      <Counter></Counter>
      <br />
      {/* <button>Click Me</button> */}

      <button onClick={handleCLick}>Click Me</button>
      <br />
      <br />
      <button onClick={handleCLickThree}>Click Me </button>
      <br />
      <br />
      <button onClick={() => addBtn(7)}>add</button>

    </>
  )
}

export default App
