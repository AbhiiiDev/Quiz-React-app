
import TextField from '@mui/material/TextField';
import {  useState } from 'react';
import {CatBox} from './CatBox';

import {Categories} from '/src/Data/Categories.jsx'


import {  useNavigate } from "react-router-dom";
import { PropTypes } from 'prop-types';

import './Home.css'
import ErrorMessage from '../../components/Error';


const Home = ({name,setName,fetchQuestions}) => {
    const [error, setError] = useState(false);
    const navigate=useNavigate();

const [category, setcategory] = useState([]);

    // useEffect(() => {
    //     const fetchCategories=async()=>{
    //      try {
    //          const response=await fetch('https://opentdb.com/api.php?amount=10&category');
    //          const data=await response.json();
    //              const categories=data.results;
    //        setcategory(categories);
    //              console.log(categories);
    //      } catch (error) {
    //          console.log(error);
    //      }
    //     }
    //     fetchCategories();
    //       }, [])

   
    const handleClick=()=>{
        if(!name)
        {
            setError(true)
            return;
        }
        else
        {
            setError(false);
            fetchQuestions(category);
           navigate('/quiz');
        }
    }

  return (
    <>







    <div className='select_quiz'>
        {
            error&& <ErrorMessage>Please fill your name</ErrorMessage>
        }

   
       <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
             onChange={(e)=> setName(e.target.value)}
             value={name}
          />
<h2>Choose Category !</h2>

              </div>
          {/* <TextField
            select
            label="Select Category"
            // value=
            // onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          ></TextField> */}
          {/* <CatBox category={}/> */}

<div className="category-container">
{
    Categories.map(item=>
        (   <>
        <CatBox key={item.value} name={item.category} handleClick={handleClick} />
        </> )
        )
}

        </div>


    </>
  )

}
Home.propTypes = {
    name: PropTypes.string.isRequired,
    fetchQuestions:PropTypes.func.isRequired,
    setName:PropTypes.func.isRequired // This defines 'category' as a required string prop
  };




export default Home
