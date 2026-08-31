import {useEffect} from 'react'
import {useState} from 'react';

const Main = () => {
  const[count,setCount] = useState(0);
  const[age,setAge] = useState(18);
  const[resdata,setResdata] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    
    .then((data)=>setResdata(data))
    .catch((err)=>console.log(err))
  },[age]);
  return (
    <div>
      {/* <h1>Example of useEffect</h1>
      <h3>Count: {count}</h3>
      <button onClick={()=>{setCount(count+1)}}>Add</button> */}
      <h1>Example of useEffect</h1>
      <table border="1" >
        <thead> 
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </thead>
        <tbody>
          {resdata.map((rs,index)=>{
            return(
              <tr >
                <td>{index+1}</td>
                <td>{rs.userId}</td>
                <td>{rs.title}</td>
                <td>{rs.body}</td>
              </tr>
            )
          })}
         
        </tbody>
      </table>
    </div>
  )
}

export default Main ;