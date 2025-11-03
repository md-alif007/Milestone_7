
import './App.css'
import Counter from './counter';

function App() {

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

      <h3>Vite + React</h3>

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
