import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'; // Import CSS tùy chỉnh

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [error, setError] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/giangvien/login', {
        email,
        password,
      });
      
      if (response.status === 200) {
        localStorage.setItem('email', email); 
        onLogin(email); 
        navigate('/home'); 
      }
    } catch (err) {
      console.error(err);
      setError('Email hoặc mật khẩu không hợp lệ');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="h3-login">ĐĂNG NHẬP</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mật khẩu:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="text-danger mb-3">{error}</div>}
          <button type="submit" className="btn btn-primary w-100">Đăng Nhập</button>
        </form>
      </div>
    </div>
  );
};

export default Login;



