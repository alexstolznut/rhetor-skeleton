import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route,  Link } from "react-router-dom";
import {useState} from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import EditArticle from './components/EditArticle';

function App() {
  const [state,setState] = useState({
    users:[],
    article:[] 
  });

  const setUser = (userInfo) =>{
    const users = state.users;
    users.push(userInfo);
    setState({users})
    console.log(users);
  }
  return (
<div className="App">
    <Router>
    
        <Routes>
        <Route exact path="/login" element={<Login setUser={setUser}/>}></Route>
          <Route exact path="/" element={<Dashboard userInfo={state.users} />}></Route>
          <Route exact path="/editor" element={<EditArticle />}></Route>
        </Routes> 
      
    </Router>
    </div>
  );
}

export default App;
