import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar';

export default function SignUp() {
    let navigate = useNavigate();
    const handleSubmit = () => {
      navigate('/login');
    }
  return (
    <>
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
      <div>
      <Navbar/>
      </div>
    <div className='container'>
    <form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
    <div className="mb-3">
    <label for="name" className="form-label text-white">Name</label>
    <input type="text" className="form-control" required="required"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="required"/>
    <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label text-white">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" required="required"/>
  </div>
  <button type="submit" class="m-3 btn btn-success">Submit</button>
  <Link to="/Login" className="m-3 btn btn-danger">Already a user</Link>
</form>
</div>
</div>
    </>
  )
}
