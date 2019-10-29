import React from 'react';
import './App.css';

const App = () => <PersonList />;


const PersonList = () => {

  const people = [
    {
      img: 34,
      name: 'Jessica',
      job: 'Developer'
    },
    {
      img: 28,
      name: 'Taylor',
      job: 'Designer'
    },
    {
      img: 60,
      name: 'Katty Perry',
      job: 'Artist'
    }
  ]

  return (<section>
      <Person person={people[0]} />;
      <Person person={people[1]}>
        Lorem ipsum dolar sit emet constertur.
      </Person>;
      <Person person={people[2]} />;
    </section>);
}


const Person = (props) => {
  const {img, name, job} = props.person;
  const {children} = props;
  const url = `https://randomuser.me/api/portraits/thumb/women/${img}.jpg`;
  
  return (<div className="person">
    <img src={url} alt="" />
    <div>
      <h4>{name}</h4>
      <h4>{job}</h4>
      {children}
    </div>
  </div>);
}


export default App;
