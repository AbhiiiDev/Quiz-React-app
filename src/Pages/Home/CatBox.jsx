import React, { useState } from 'react'
import { PropTypes } from 'prop-types';
import { useNavigate } from 'react-router-dom';

export const CatBox = (props) => {
const navigate=useNavigate();
const [error, setError] = useState(false);
      const handleClick=()=>{
        if(!name)
        {
            setError(true)
            return;
        }
        else
        {
            setError(false);
            props.fetchQuestions(props.category);
           navigate('/quiz');
        }
    }
    
   


    const boxStyle = {
        backgroundColor: '#efeee1',
        border: '1px solid #faec24',
        padding: '20px',
        margin: '10px',
        textAlign: 'center',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
      };
      const textStyle = {
        fontSize: '18px',
        margin: '0',
        color: '#333',
      };
const name =props.name;
    return (
    <div style={boxStyle} className='category-box'  >
        <button style={textStyle} onClick={handleClick} >{name}</button>
    
    </div>
  )
}
CatBox.propTypes = {
    name: PropTypes.string.isRequired,
    fetchQuestions:PropTypes.func.isRequired,
     // This defines 'category' as a required string prop
  };


