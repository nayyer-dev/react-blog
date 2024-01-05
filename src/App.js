import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Component/Login';
import Navbar from './Component/Navbar';
import Registers from './Component/Registers';
import Users from './Component/Users';
import CreateUser from './Component/CreateUser';
import UpdateUser from './Component/UpdateUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />}/>
        <Route path='/registers' element={<Registers />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/CreateUser' element={<CreateUser />}/>
        <Route path='/UpdateUser/:updateuserId' element={<UpdateUser />}/>
      </Routes>
      </BrowserRouter>
      {/* <h1>Install bootstrap</h1> */}
    </div>
  );
}

export default App;
