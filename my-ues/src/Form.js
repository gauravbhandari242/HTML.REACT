import {useState}from 'react';

function FormExample(){
const[age, setAge] = useState('');

  const handleSubmit =(e) => { e.preventDefault();

    alert ('Form Submitted with:'+age );
  };
    return(
        
            <form onSubmit={handleSubmit}>
        age<input type="text" value={age} onChange={e => setAge(e.target.value)}/>
        <button type='submit'>submit</button>
        </form>
        
    );
}
export default FormExample;