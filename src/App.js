import portrait from './portrait.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={portrait} class
                                        className="App-link"
                                        href="https://reactjs.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ width: 80, height: 100,
                                        justifyContent: 'left', alignItems: 'left', }}
                                      />
      </header>
    </div>
  );
}

export default App;
