const Header = (props) => (
  <h1>{props.name}</h1>
)

const Part = (props) => {
  console.log(props);
  return (<p>{props.part.name} {props.part.exercises}</p>)
}

const Content = (props) => {
  console.log(props);
  return (
    <div>
      <Part part={props.course.parts[0]} />
      <Part part={props.course.parts[1]} />
      <Part part={props.course.parts[2]} />
    </div>
  )
}

const Total = (props) => (
  <p>Number of exercises {props.total}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const exercisesTotal = part1.exercises + part2.exercises + part3.exercises;

  return (
    <div>
      <Header name={course} />
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
      <Total total={exercisesTotal} />
    </div>
  )
}

export default App