// import { useState } from 'react';
import './App.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 from-cyan-700 to-blue-700">
        <TopButtons/>
        <Inputs />
        <TimeAndLocation />
    </div>
  );
}

export default App;
