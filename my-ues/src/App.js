import { useState } from "react";
import './App.css';
import Form from './Form';

function FormExample(){

  const[input,setInput] = useState ('');
  const[age, setAge] = useState('');

  const handleSubmit =(e) => { e.preventDefault();
 
    alert ('Form Submitted with:'+ input+''+age );
  };
     return(
      <div className="form">
      <form onSubmit={handleSubmit}>
        name<input type="text" value={input} onChange={e => setInput(e.target.value)}/>
        <button type="submit">submit</button>
        age<input type="text" value={age} onChange={e => setAge(e.target.value)}/>
        <button type="submit">submit</button>
        <Form/>
        </form>
        </div>

     );
    }
  export default FormExample;


