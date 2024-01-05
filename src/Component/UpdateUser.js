import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'


const UpdateUser = () => {

    const [name, setName]=useState('')
    const [job, setJob]=useState('')
    const location = useParams();

    function formSubmit(e){
        e.preventDefault()
      }

    useEffect(()=>{
        console.log(location, 'location');
        axios.get(`https://reqres.in/api/users/${location.updateuserId}`)
    
        .then((res)=>{
            console.log(res)
            setName(res.data.data.first_name)
            setJob(res.data.data.last_name)
            }).catch((err)=>{
            console.log(err);
            })
    },[])

    function onChangeName(e){
        setName(e.target.value)
    }
    function onChangeJob(e){
        setJob(e.target.value)
    }

    function showData(){
        console.log('test');
        axios.put(`https://reqres.in/api/users/${location.updateuserId}`,{

            name: name,
            job: job,
        })


        .then(function(response){
            console.log(response);
            if(response.status === 201) {
                alert('Successfull');
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }
        


  return (
    <div className='App'>

<form onSubmit={formSubmit} class = "container mt-5">
        <h1>Update User</h1>
        <div class="mb-3">

    <input id='title' type="name" class="form-control"  placeholder="name" value={name} onChange={onChangeName}   />
  </div>
  <div class="mb-3">
    <input id='title' type="job" class="form-control" placeholder='job' value={job} onChange={onChangeJob} />
  </div>
  <button onClick={showData} class="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default UpdateUser