import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();

  const [email, setEmail]= useState('')
  const [password, setPassword]= useState(null)

  function formSubmit(e){
    e.preventDefault()
  }

  function onChangeEmail(e){
    setEmail(e.target.value);
  }

  function onChangePassword(e){
    setPassword(e.target.value);
  }

  function showData(){
    console.log(email, password);
    axios.post('https://reqres.in/api/logins', {
    email: email,
    password: password,
  })
  .then(function (response) {
    console.log(response);
    if (response.status === 201){
      alert('All good (:')
      navigate("/Users");
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  }




  return (
    <div className='App'>
        <form onSubmit={formSubmit} class = "container mt-5">
        <h1>Login</h1>
        <div class="mb-3">
    {/* <label for="exampleInputEmail1" class="form-label">Email address</label> */}

    <input id='title' type="email" class="form-control"  placeholder="example@.com" value={email} onChange={onChangeEmail}/>

    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input id='title' type="password" class="form-control" placeholder='******' value={password} onChange={onChangePassword} />
  </div>
  <button onClick={showData} type="submit" class="btn btn-primary">Show Login Data</button>
        </form>
        
    </div>
  )
}

export default Login