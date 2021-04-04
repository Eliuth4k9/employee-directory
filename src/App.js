import './App.css';
// import React from 'react';
// import testOne from './components/utils/API';
import axios from 'axios';
import React, {useEffect} from "react"

 export default function App() {
  useEffect(() => {
   const varName = axios.get("https://randomuser.me/api/?results=20&nat=us");
   console.log(varName);
  }, [])
  return (
    <div className="App">
      <h1>hello from steve react</h1>
    </div>
  );
}
