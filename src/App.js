import "./App.css"
import {BrowserRouter} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import {Link,Route,Switch} from 'react-router-dom';
import Header from './components/Header'
import Nav from './components/Nav'
import Contents from './components/Contents'
import Search from "./components/Search";
import Update from "./components/Update";
function App() {
  return (
    <div className="App">
        <Header />
        <Route exact path="/search">
          <Search />
        </Route>
        <Route exact path="/">
          <Nav />
          <Contents />
          <Update />
        </Route>
    </div>
  );
}

export default App;
