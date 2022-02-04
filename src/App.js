import './App.css';
import Header from './Components/Header/Header';
import Teams from './Components/Teams/Teams';

function App() {
  return (
    <div>
      <div className="header">
        <Header></Header>
      </div>
      <div className="body">
        <Teams></Teams>
      </div>
    </div>
  );
}

export default App;
