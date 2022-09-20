import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import * as axios from "axios";
function App() {
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const onChangeName = (e)=>{
    setName(e.target.value);
  }
  const onChangePassword = (e) =>{
    setPassword(e.target.value);
  }
  const onSubmit = async (e) =>{
    e.preventDefault();
    const opts = {
      headers: {
          'Content-Type': 'application/json'
      },
     
    };
    const _url = "http://localhost:5022" + "/auth/login";
    var param = {
        email : name,
        password:password
    }
    try {
      var result = await axios.post(_url,param,opts);
      if(result.status === 200){
        alert("dang nhap thanh cong");
        return;
      }
    } catch (error) {
      alert("dang nhap khong thanh cong");
    }
    
   
  }
  return (
    <div className="App" onSubmit={onSubmit}>
       <form>
           <input type="text" className='name-input' value={name} onChange={onChangeName}></input>
           <input type="text" className='password-input'  value={password} onChange={onChangePassword}></input>
           <input type = "submit" value = "Submit" />
      
      </form> 

    </div>
  );
}

export default App;
