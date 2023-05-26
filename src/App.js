import './index.css';
import NavBar from './NavBar';
import Home from './Home';
import Services  from './Services';
import Products from './Products';
import Contact from './Contact';
import SignUp from './SignUp';
import Footer from './Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {

  const [isClicked, setIsClicked] = useState(false);

  //For SignUp Page
  const [user, setUser] = useState({firstName: null, lastName:null, email:null, password: null});
  const [accounts, setAccounts] = useState([]);
  const [message, setMessage] = useState(['']);
  useEffect(()=>{
    
    if(accounts.length == 0 )
    {
      if(user.email !== null)
      {
        setAccounts([...accounts, user]);
      }
      
    }
    else
    {
      accounts.filter( acc =>(
        acc.email !== user.email ? (setAccounts([...accounts, user]), setMessage('Registered Succesfully')) : setMessage('Email address is already used')
      ))
    }
  },[user])

  useEffect(()=>{
    console.log(accounts);
  }, [accounts])
  //
    
  return (
   

    <div className="App">
        <NavBar isClicked = {isClicked} setIsClicked={setIsClicked} />
        <Footer/>
        <Routes>
          <Route exact path='/' element = {<Home isClicked = {isClicked} setIsClicked = {setIsClicked} />} />
          <Route path ='/services' element = {<Services isClicked={isClicked}/>} />
          <Route path ='/products' element = {<Products isClicked={isClicked}/>} />
          <Route path='/contactus' element = {<Contact isClicked={isClicked}/>}/>
          <Route path='/signUp' element = {<SignUp isClicked = {isClicked} setUser={setUser} message={message} setMessage={setMessage}/>}/>
        </Routes>
    </div>
  );
  
}


export default App;