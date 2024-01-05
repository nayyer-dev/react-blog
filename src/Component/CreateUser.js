import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {

    const [name, setName]=useState('')
    const [job, setJob]=useState('')

    const navigate = useNavigate();


    function formSubmit(e){
        e.preventDefault()
      }

    function onChangeName(e){
        setName(e.target.value)
    }
    function onChangeJob(e){
        setJob(e.target.value)
    }

    function showData(){
        console.log(name, job);
        axios.post('https://reqres.in/api/users', {
            name: name,
            job: job,
        })
        .then(function(response){
            console.log(response);
            if(response.status === 201) {
                alert('Successfull');
                navigate("/users")
            }
        })
        .catch(function(error){
            console.log(error);
        },[])
    }

  return (
    <div className='App'>
        <form onSubmit={formSubmit} class = "container mt-5">
        <h1>Create User</h1>
        <div class="mb-3">

    <input id='title' type="name" class="form-control"  placeholder="name" value={name} onChange={onChangeName}/>
  </div>
  <div class="mb-3">
    <input id='title' type="job" class="form-control" placeholder='job' value={job} onChange={onChangeJob}/>
  </div>
  <button onClick={showData} type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default CreateUser;