import {useState} from 'react';

function C2f(){
    const [count, setCount] = useState(0);
    const add = () => {
        setCount(count + 1);
    }
    const [count1, setCount1] = useState(65);
    const addC = () => {
    
    setCount(prevCount => prevCount + 1); 
  };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={add}>Add</button>
            <div>
                <h1>Letter: {String.fromCharCode(count)}</h1> 
                <button onClick={addC}>Next Letter</button>
            </div>
            
        </div>
        
    );
}

export default C2f;