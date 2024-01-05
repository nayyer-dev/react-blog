import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {

  const navigate = useNavigate();
  const [users, setUsers] =useState([]);

  function deleteUser(){
    console.log('deleteUser');
  }

  useEffect(()=>{
    axios.get('https://reqres.in/api/users')

    .then((res)=>{
      console.log(res)
      
      

      setUsers(res.data.data);
      }).catch((err)=>{
        console.log(err)
      })
      
},[])

function showCreateUser(){
  console.log('testing create user');
  navigate("/createuser")
}

// function showUpdateUser(){
//   console.log('testing');
//   navigate("/updateuser")
// }

  return (
    <div className='App'>
      <h1 id='tag'>Users</h1>
      <button onClick={showCreateUser} id='btn' class="btn btn-primary">Create User</button>

      <table className='table'>
        <thead>
          <tr>
            <th>first_name</th>
            <th>Avatar</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
        {
          users.map((i)=>{
          const name = i.first_name + i.last_name
            return  <tr key={i.first_name}>
          <td>{name}</td>
          <img src={i.avatar}/>
          <td>{i.email}</td>
          <Link to={`/updateuser/${i.id}`}> <button id='btn2' className="btn btn-primary">Update User ✏</button></Link>
          <button onClick={deleteUser} id='btn2' className="btn btn-primary">Delete User ✏</button>
          </tr>       
      }
      )
    }

        </tbody>
      </table>
    </div>
  )
}

export default Users;



