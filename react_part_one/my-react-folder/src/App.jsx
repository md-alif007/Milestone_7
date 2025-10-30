
import './App.css'
import ToDo from './toDo'

function App() {


  return (
    <>
      <h1>react core concepts</h1>
      <ToDo task = "learn react" isDone = {true}></ToDo>
      <ToDo task = "revise react" isDone = {false}></ToDo>
      <ToDo task = "learn js" isDone = {true}></ToDo>

      {/* <Students></Students>
      <Students></Students>
      <Person></Person>
      <Developer name="Mozumdar" tech="java"></Developer>
      <Developer name="Rakib" tech="js"></Developer>
      <Developer name="patowary" tech="python"></Developer>
      <Politician name="alif" team="teamOne"></Politician>
      <Politician name="mehedi" team="teamTwo"></Politician>
      <Player name="Tamim" run="5000"></Player>
      <Player name="taskin" run="5000"></Player>
      <Salami occasion="Roja Eid" amount="500"></Salami>
      <Salami occasion="graduation" amount="1000" ></Salami> */}

    </>
  )
}

function Salami({ occasion, amount }) {
  return (
    <div className='student'>
      <p>slami for : {occasion}</p>
      <p>amount : {amount}</p>
    </div>
  )
}

// const {name , run }= {name: 'taskin', run: '5000'}
function Player({ name, run }) {

  return (
    <div className='student'>
      <h3>Name : {name}</h3>
      <h3>Run  : {run}</h3>
    </div>
  )
}

function Politician(props) {
  return (
    <div style={{
      border: '2px solid blue',
      borderRadius: '10px'
    }}>
      <p>Name : {props.name}</p>
      <p>Team : {props.team}</p>
    </div>
  )
}

// {
//     "name": "patowary",
//     "tech": "python"
// }

function Developer(props) {
  console.log(props);
  return (
    <div style={{
      border: '2px solid blue',
      borderRadius: '10px'
    }}>
      <h3>Developer : {props.name} </h3>
      <h3>Technology:{props.tech}</h3>
    </div>
  )
}

function Students() {
  return (
    <div className='student'>
      <p>Name : </p>
      <p>Dept : </p>
    </div>
  )
}

function Person() {
  const age = 17;
  const name = 'jamal';

  const personStyle = {
    color: 'purple',
  }

  return (
    <p id='' title='' style={personStyle}>I am {name} , age is  {age}</p>
  )
}

function Sports() {
  return (
    <p>I am sports</p>
  )
}

export default App
