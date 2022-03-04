import React,{useState} from "react";
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import Auth from "./routes/Auth"
import Header from './Header'
import Nav from './Nav'
import Contents from './Contents'
import Search from "./Search";
import Update from "./Update";
const AppRouter= (props) => {
    return(
        <Router>
            <Switch>
                {props.isLoggedIn 
                    ? <>
                    <Route exact path="/">
                        <Header />
                        <Route exact path="/search">
                          <Search />
                        </Route>
                        <Route exact path="/">
                          <Nav />
                          <Contents />
                          <Update />
                        </Route>
                    </Route></>
                    :<Route exact path="/">
                        <Auth />
                    </Route>
                }
            </Switch>
        </Router>
    )
}
export default AppRouter;