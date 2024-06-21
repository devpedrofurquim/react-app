import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Let's learn more about tests in React!</p>
      <div className='buttons-div'>
        <button>
          <a data-testid="repo-link" href='https://github.com/devpedrofurquim/react-app'>Acess this project repository</a>
        </button>
        <button>
          <a data-testid="website-link" href='https://devpedrofurquim.github.io'>Acess my website</a>
        </button>
      </div>
    </div>
  );
}

export default App;
