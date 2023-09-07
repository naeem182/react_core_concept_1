import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TToDDo from './TToDDo'
import Actor from './Actor'
import Singer from './Singer'


function App() {

  const actor = ['sakib', 'raj', 'jasim', 'rubel'];

  const singer = [
    { name: 'hero alom', age: 29 },
    { name: 'mahfuz', age: 24 },
    { name: 'kabila', age: 20 },
    { name: 'pritom', age: 20 },
  ]



  return (
    <div>
      <h1>Vite + React</h1>

      {singer.map(singer =>
        <div style={
          {
            margin: '20px',
            padding: '5px',
            paddingLeft: '40px',
            border: '2px solid purple',
            borderRadius: '20px'


          }}>  <Singer singer={singer}></Singer></div>)

      }


      <Actor name={"naeem"}></Actor>
      {
        actor.map(actor => <Actor name={actor}></Actor>)
      }



      <TToDDo
        task="Learn React"
        isDone={true}></TToDDo>

      <TToDDo
        task="core concept"
        isDone={true}></TToDDo>

      <TToDDo
        task="try jsx"
        isDone={false}></TToDDo>


      {/* <Person></Person>

      <Person></Person>

      <Student grade='7' score='88'></Student>
      <Student grade='8' ></Student> */}

    </div>)
}

function Person() {
  // style
  const personstyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'


  }
  const name = 'naeem';
  const age = 24;
  const job = { jobname: "jobnai", taka: "takanai" };
  return (
    < div style={personstyle} >
      <h3> i am {name} age{age} job: {job.jobname} takapoysa {job.taka}</h3 >
    </div >

  )
}
// destructuring
const { grade, score } = { grade: 12, score: 99 };
// function Student(props) {
function Student({ grade, score = '0' }) {
  console.log(grade, score);
  return (
    <div style={
      {
        margin: '20px',
        padding: '20px',
        border: '2px solid purple',
        borderRadius: '20px'


      }
    }>
      {/* <h3>This is a student</h3>
      <p>Class: {props.class}</p>
      <p>score: {props.score}</p> */}
      <h3>This is a student</h3>
      <p>Class: {grade} </p>
      <p>score: {score}</p>
    </div>
  )
}

export default App
