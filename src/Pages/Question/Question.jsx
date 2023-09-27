import ErrorMessage from "../../components/Error";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './Question.css'
const Question = (
{ currQues,
  setcurrQues,
  question,
  options,
  correct,
  setScore,
  score,
  setQuestion}
) => {

const [error, seterror] = useState(false);
const [selected, setselected] = useState()
const navigate=useNavigate();
const handleClick=(item)=>{

}
const handleNext=()=>{
if(currQues>8)
{
    navigate('/result');
}
else if(selected)
{
setcurrQues(currQues+1);
setselected();
}
else
{
    seterror("Please select an option");
}
}
const handleQuit=()=>
{
setcurrQues(0);
setQuestion();
}
const handleSelect=(i)=>
{
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
}
const handleCheck=(i)=>
{
    setselected(i);
    if (i === correct) setScore(score + 1);
    seterror(false);
}

  return (
    <div className="question">
     {   console.log(currQues)}
     <h1>Question {currQues + 1} :</h1>
     <div className="singleQuestion">
     <h2>{question[currQues].question}</h2>
     <div className="options">
     { error && <ErrorMessage>{error}</ErrorMessage>}
    
     {
        options && options.map((i)=>(
            <button
            className={`singleOption  ${selected && handleSelect(i)}`}
            key={i}
            onClick={() => handleCheck(i)}
            disabled={selected}
          >
            {i}
            </button>
        ))
     }
     <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > 8 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
        </div>
        </div>
        
        
  )
}

export default Question
