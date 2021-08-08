import './App.css';
import Greeter from './components/Greeter';

function App() {

  // const user1 = "Natasha";
  const peopleToGreet = [
    'Natasha',
    'John',
    'Peter',
    'Louis'
  ]
  return (
    <div className="App">

      {peopleToGreet.map((person,index) => {
        return <Greeter key={`${person + index}`} name={person} />
      })}
      {/* <Greeter name="Natasha"/>
      <Greeter name={user1}/>
      <Greeter name="Steve"/>
      <Greeter name="Bruce"/>
      <Greeter name="Thor"/>
      <Greeter name="Tony"/>
      <Greeter name="Peter"/>
      <Greeter name="Loki"/>
      <Greeter />
      <Greeter /> */}
    </div>
  );
}

export default App;
