import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const  Login = (props) => {
let navigate = useNavigate();
const [username, setUsername] = useState("");
const [ password, setPassword] = useState("");

const onChange = (e) => {
    setUsername(e.target.value);
    console.log(username);
    
}

const onSubmit = () => {
    const userId = Math.floor(Math.random() * 100000000);
    props.setUser({userId, username});
    navigate('/');

}
  return (
    <div style={{minHeight:"200px", color:"red"}}>
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="Username" variant="outlined" onChange={onChange}/>
    <TextField id="outlined-basic" label="Password" variant="outlined" type="password"/>
    

  </Box>
 
      <Button variant="contained" onClick={onSubmit}>Sign Up</Button>
  </div>

  )
}

export default Login;
