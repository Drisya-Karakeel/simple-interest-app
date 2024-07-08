
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


function App() {

  /*1) create  state to hold data */
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest,setInterest] = useState(0)

  /* create a state for conditional rendering */
  const[isPrinciple,setIsPrinciple] =useState(true)
  const[isRate,setIsRate] =useState(true)
  const[isYear,setIsYear] =useState(true)



/* 2 to take value from input box */
  const validate = (e)=>{
  /*   console.log(e.target.value);
    console.log(e.target.name); */
    let name = e.target.name
    let value = e.target.value
    /* regular expression */
    console.log(!!value.match(/^[0-9]*$/));//!! -for convert to true or false
    if (!!value.match(/^[0-9]*$/)) {
      
    if(name =='principle'){
      setPrinciple(value)
      setIsPrinciple(true)

    }
    else if (name == 'rate'){
      setRate(value)
      setIsRate(true)


    }
    else{
      setYear(value)
      setIsYear(true)

    }
      
    }
    else{
      if(name =='principle'){
        setPrinciple(value)
        setIsPrinciple(false)
  
      }
      else if (name == 'rate'){
        setRate(value)
        setIsRate(false)
  
  
      }
      else{
        setYear(value)
        setIsYear(false)
  
      }


    }
}
/* reset  */
const handleReset =()=>{
  setPrinciple(0)
  setRate(0)
  setYear(0)
  setIsPrinciple(true)
  setIsRate(true)
  setIsYear(true)
  setInterest(0)
}

const calculate=()=>{
 setInterest((  principle*rate*year)/100)
}
/* console.log(principle,rate, year); */

/* console.log('principle',principle );
console.log('rate',rate );
console.log('year',year ); */


  return (
    
    <div className="d-flex justify-content-center align-items-center " style={{width:'100%', height:'100vh'}}>
      <div className="bg-light p-5 rounded" style={{width:'500px'}}>
        <h1 className='text-center'>Simple Interest App</h1>
        <p className='text-center'>Calculate your simple interest Easily</p>
        <div className="mt-4 rounded shadow  bg-warning d-flex justify-content-center align-items-center p-3 flex-column ">
          <h2  className='fs-1 fw-bolder'>₹ {interest}</h2>
          <p>Total Simple Interest</p>
        </div>
        {/*----------------- form creation using material UI-------- */}
        <form  className='mt-5'>

          <div className="mb-3">
            <TextField id="outlined-basic" label="₹ Principle Amount" variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='principle' value={principle || ""} />
              {/* give truthy operator */}

              { !isPrinciple &&  <p className='text-danger'> *Invalid Input</p>}
          </div>

          <div className="mb-3">
            <TextField id="outlined-basic" label="Rate of Interest (p.a)%" variant="outlined" className='w-100' onChange={(e)=>validate(e)} name='rate' value={rate || ""} /> 
            { !isRate && <p className='text-danger'> *Invalid Input</p>}

          </div>

          <div className="mb-3">
           <TextField id="outlined-basic" label="Year(Yr)" variant="outlined" className='w-100'  onChange={(e)=>validate(e)} name='year' value={year || ""}/>
          {!isYear && <p className='text-danger'> *Invalid Input</p>}

          </div>

          {/* button from material UI */}

          <div className="d-flex justify-content-between w-100 mt-4">
          <Button variant="contained" color='success' style={{width:'190px' ,height:'60px'}} disabled={isPrinciple && isRate && isYear ?false:true}  onClick={calculate}>CALCULATE</Button>
          <Button variant="outlined" style={{width:'190px' , height:'60px'}} onClick={handleReset}>RESET</Button>
          </div>
       </form>

      </div>
    </div>
     
    
  )
}

export default App
