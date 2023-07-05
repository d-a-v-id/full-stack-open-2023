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
      <Part part={props.course[0]} />
      <Part part={props.course[1]} />
      <Part part={props.course[2]} />
    </div>
  )
}

const Total = (props) => (
  <p>Number of exercises {props.total}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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
  const exercisesTotal = parts.reduce(
    (acc, elem) => acc + elem.exercises, 0
  );
  console.log(exercisesTotal);

  return (
    <div>
      <Header name={course} />
      <Content course={parts} />
      <Total total={exercisesTotal} />
    </div>
  )
}

export default App