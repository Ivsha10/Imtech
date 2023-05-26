import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {

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
  return (
   

    <div className="App">
      <Header/>
      <Content setUser={setUser} 
               message = {message}
               setMessage = {setMessage} />
      <Footer/>
    </div>
  );
  
}


export default App;
