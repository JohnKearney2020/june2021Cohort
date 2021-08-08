import './App.css';
import Friend from './components/Friend';
import Name from './components/Name';
import StarRating from './components/StarRating';

function App() {
  return (
    <div className="App">
      {/* <Friend friendName="Steve Irwin"/> */}
      {/* <Name firstName="Steve" lastName="Rogers" /> */}
      <StarRating rating={3} />
    </div>
  );
}

export default App;
