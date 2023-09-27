import Header from './components/Header/Header'
import './App.css'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { useState } from 'react';
import Quiz from './Pages/Quiz/Quiz'

import Result from './Pages/Result/Result';
import axios from 'axios';

function App() {
const [name,setName]=useState('');
const [score,setScore]=useState(0);
const [question,setQuestion]=useState();


const fetchQuestions=async(category="")=>{
    const {data}=await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=medium&type=multiple`);
    // console.log(data.results);

    setQuestion(data.results);

}
const backgroundStyle = {
  backgroundImage: 'url("/src/assets/yellowBack.png")', // Replace with the correct image path
  backgroundSize: 'cover', // This property scales the image to cover the entire element
  backgroundRepeat: 'no-repeat', // Prevents the image from repeating
  height: '160vh', // Set the height to cover the entire viewport
};
  return (
<Router>
<div className="app" style={backgroundStyle}>
  <Header/>
<Routes>
<Route path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}/>
<Route path='/quiz' element={<Quiz name={name} score={score} setScore={setScore} question={question} setQuestion={setQuestion}/>}/>
<Route path='/result' element={<Result name={name} score={score}/>}/>


     </Routes>
    
     </div>
 
     </Router>
   
  )
}

export default App
