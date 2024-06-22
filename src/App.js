import './App.css';
import { useState } from 'react';
import Task from './components/Task';

function App() {
  const [message, setMessage] = useState('Let\'s learn more about tests in React');

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>{message}</p>
      <div className='buttons-div'>
        <button>
          <a data-testid="repo-link" href='https://github.com/devpedrofurquim/react-app'>Acess this project repository</a>
        </button>
        <button>
          <a data-testid="website-link" href='https://devpedrofurquim.github.io'>Acess my website</a>
        </button>
        <button onClick={() => setMessage('Let\'s learn more about tests in React With Jest and Testing Library')}>
          With what?
        </button>
      </div>
    </div>
  );
}

export default App;
