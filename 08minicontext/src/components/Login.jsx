import React,{useState,useContext} from 'react'
import UserContext from '../context/UserContext';


function Login() {
    const [username,setusername] = useState();
    const [password,setpassword] = useState()
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
     e.preventDefault()
     setUser({username,password})
    }
  return (
    <>
      <h2>Login</h2>
      <input type="text" 
      value="text"
      onChange={(e) => setusername(e.target.value)}
      placeholder='Username'

      
      />
      {" "}
      <input type="password"
      value={password}
      onChange={(e) => setpassword(e.target.value)

      }
      placeholder='Password'

      />
      
    </>
  );
}

export default Login