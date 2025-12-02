import './App.css';
import StarRating from './star-rating/StarRating';

function App() {
  function handleChange(value) {
    console.log(value)
  }
  return (
    <div className="App">
      <StarRating value={0} onChange={handleChange} />
    </div>
  );
}

export default App;
