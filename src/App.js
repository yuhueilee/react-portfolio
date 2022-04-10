import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" elements={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default App;
