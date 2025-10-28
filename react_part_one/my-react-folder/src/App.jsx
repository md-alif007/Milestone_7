
import './App.css'

function App() {


  return (
    <>
      <h1>react core concepts</h1>
      <Students></Students>
      <Students></Students>
      <Person></Person>
      <Developer name = "Mozumdar" tech = "java"></Developer>
      <Developer name = "Rakib" tech = "js"></Developer>
      <Developer name = "patowary" tech = "python"></Developer>
    </>
  )
}

function Developer(props) {
  return(
    <div style = {{
      border : '2px solid blue',
      borderRadius : '10px'
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
