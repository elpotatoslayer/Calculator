/* eslint-disable no-unused-vars */
import './App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

function App() {
  return (
    <div className="app">
      <Display />
      <ButtonPanel />
    </div>
  );
}

export default App;
