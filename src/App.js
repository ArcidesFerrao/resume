import { useEffect, useState } from 'react';
import './App.css';
import Resume from './components/Resume';

function App() {
  
  const [themeData, setThemeData] = useState("dark");
  

  return (
    <div className="App">

      <Resume />

    </div>
  );
}

export default App;
