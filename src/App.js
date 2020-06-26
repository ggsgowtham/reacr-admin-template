import React, { useState, useMemo,useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Index from './pages';
import About from './about';
import Header from './header/header';
import UserContext from './userContext';
import'bootstrap/dist/css/bootstrap.css';


const App = () => {

  const userList = async () => {
    const response = await fetch(`https://reqres.in/api/users?page=2`);
    const data = await response.json();
    setUser(data)
  };

  const [user, setUser] = useState(userList);
  

  useEffect(() => {
    userList();
  }, []);

  const providerValue = useMemo(() => ({ user, setUser}), [user, setUser]);
  return (
    <Router>
      <div>
      <Header />
        <UserContext.Provider value= {providerValue}>
          <Route path="/" component={ Index } exact/>
          <Route path="/about/:id" component = { About } /> 
        </UserContext.Provider>           
      </div>
    </Router>
  );
}

export default App;
