import './index.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App() {

    const questions = [
        {
            id: 1, q: 'What is the capital of Serbia?', options: ['Belgrade', 'Novi Sad', 'Nis', 'Sabac'], answer: 'Belgrade', tried: false
        },
        {
            id: 2, q: 'Who won the Champions League in 2022?', options: ['Real Madrid', 'Liverpool', 'Man City', 'Barcelona'], answer: 'Real Madrid', tried: false
        },
        {
            id: 3, q: 'Who was the first Serbian player that won an NBA MVP award?', options: ['B. Bogdanovic', 'Vlade Divac', 'Pedja Stojakovic', 'Nikola Jokic'], answer: 'Nikola Jokic', tried: false
        }
];

    
  return (
   

    <div className="App">
      <Header/>
      <Content questions = {questions}/>
      <Footer/>
    </div>
  );
  
}


export default App;