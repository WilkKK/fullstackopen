import React from 'react'
import ReactDOM from 'react-dom'

 const Header = (props) => {
  return <h1>{props.title}</h1>
 }
 const Part = (props) => {
   return <p>{props.text} {props.number}</p>
 }
 const Content = (props) => {
   var elements = props.parts.map(part =>  <Part text={part.name} number={part.exercises}></Part>)
   return elements
 }
 const Total = (props) => {

   const arrSum = props.parts.reduce((sum, part) => sum + part.exercises, 0);
   return<p>Number of exercises {arrSum}</p>
 }

const App = () => {
 
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header title={course.name}></Header>
      <Content parts={course.parts} ></Content>
      <Total parts={course.parts}></Total>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))