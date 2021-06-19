import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import BooksDataLoad from './components/BooksDataLoad/BooksDataLoad';
import Login from './components/Login/Login';
import NoFound from './components/NoFound/NoFound';
import CheckOut from './components/CheckOut/CheckOut';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
import Orders from './components/Orders/Orders';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div className="App">
      <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <BooksDataLoad></BooksDataLoad>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <PrivateRoute path="/checkout/:booksList">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <Route path="/admin"> 
            <Admin></Admin>
          </Route>
          <Route exact path="/">
            <BooksDataLoad></BooksDataLoad>
          </Route>
          <Route path="*">
            <NoFound></NoFound>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
