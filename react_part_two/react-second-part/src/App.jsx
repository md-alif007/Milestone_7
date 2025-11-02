
import './App.css'

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

      {/* <button>Click Me</button> */}

      <button onClick={handleCLick}>Click Me</button>

      <button onClick={handleCLickThree}>Click Me </button>

      <button onClick={() => addBtn(7)}>add</button>

    </>
  )
}

export default App
