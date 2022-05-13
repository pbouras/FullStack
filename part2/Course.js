import React from 'react'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Content = ({course}) => {
  //console.log(course)
  return (
    <>
      {course.map(courses =>
        <Part key = {courses.id} name = {courses.name} exercises = {courses.exercises}/>
      )}
    </>
  )
}

const Total = ({course}) => {
  const mysum = course.reduce((sum,courses) => courses.exercises + sum ,0) 
  return (
    <strong><p>total of {mysum} exercises</p></strong>
  )
}

const Part = (part) => {
  //console.log(part)
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}



const Course = ({courses}) => {
  //console.log(course.parts.name)
  return (
    <>
      <Header course={courses.name}/>
      <Content course={courses.parts}/>
      <Total course={courses.parts}/>
    </>
  )
}

export default Course