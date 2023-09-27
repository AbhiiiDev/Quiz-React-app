import Header from './components/Header/Header'
import './App.css'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { useState } from 'react';
import Quiz from './Pages/Quiz/Quiz'
import Footer from './components/Footer/Footer';
import Result from './Pages/Result/Result';


function App() {
const [name,setName]=useState('');



const fetchQuestions=()=>{

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
<Route path='/quiz' element={<Quiz/>}/>
<Route path='/result' element={<Header/>}/>
<Route path='/' element={<Result/>}/>

     </Routes>
    
     </div>
     {/* <Footer/> */}
     </Router>
   
  )
}

export default App
