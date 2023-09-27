import React from 'react'
import { useState,useEffect } from 'react'
import { CircularProgress } from '@mui/material';
import Question from '../Question/Question';
import './Quiz.css'


const Quiz = ({name,score,question,setQuestion,setScore}) => {

const [currQues, setcurrQues] = useState(0)
const [options, setOptions] = useState();

useEffect(() => {
  setOptions(
    question &&
      handleShuffle([
        question[currQues]?.correct_answer,
        ...question[currQues]?.incorrect_answers,
      ])
  );
}, [currQues, question]);

// console.log(question);
// console.log(currQues);
const handleShuffle = (options) => {
  return options.sort(() => Math.random() - 0.5);
};

  return (
    <div className="quiz">
    <span className="subtitle">Welcome, {name}</span>

    {question ? (
      <>
        <div className="quizInfo">
          <span>{question[currQues].category}</span>
          <span>
            {/* {question[currQues].difficulty} */}
            Score : {score}
          </span>
        </div>
        <Question
          currQues={currQues}
          setcurrQues={setcurrQues}
          question={question}
          options={options}
          correct={question[currQues]?.correct_answer}
          score={score}
          setScore={setScore}
          setQuestion={setQuestion}
        />
      </>
    ) : (
      <CircularProgress
        style={{ margin: 100 }}
        color="inherit"
        size={150}
        thickness={1}
      />
    )}
  </div>
  )
}

export default Quiz
