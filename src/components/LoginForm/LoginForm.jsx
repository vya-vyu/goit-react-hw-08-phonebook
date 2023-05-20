import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { loginUser } from 'redux/Auth/authOperation';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
    dispatch(loginUser(form));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        <p>Email</p>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email..."
        />
      </label>
      <label htmlFor="">
        <p>Password</p>
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter password..."
        />
      </label>
      <br />
      <Button type="submit">Login</Button>
      <Link to="/register">Register</Link>
    </form>
  );
};
export default LoginForm;
