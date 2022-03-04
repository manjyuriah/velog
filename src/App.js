import "./App.css"
import {BrowserRouter} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import {Link,Route,Switch} from 'react-router-dom';
import {authService} from "./fBase";
import AppRouter from "./components/Router";
import { useState } from "react";

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(true);
  return (
    <div className="App">
       <AppRouter isLoggedIn={isLoggedIn}></AppRouter>
       <footer>&copy; {new Date().getFullYear()} Joolog </footer>
    </div>
  );
}

export default App;