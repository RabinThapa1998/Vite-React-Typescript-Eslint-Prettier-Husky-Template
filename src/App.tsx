import { useState } from 'react';
import Footer from 'common/layout/Footer';
import Header from 'common/layout/Header';
import Card from 'components/Card';

import reactLogo from './assets/react.svg';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + ESLINT + PRETTIER + HUSKY</h1>
      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Eaque vel suscipit quae aliquid.
        Laborum itaque voluptatem, sint ullam deserunt distinctio rerum quisquam
        mollitia maiores officiis. Reprehenderit dolores deleniti expedita eius,
        temporibus illum totam eum!
      </p>
      <Card />
      <Footer />
    </div>
  );
}

export default App;
