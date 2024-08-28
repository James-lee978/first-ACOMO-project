import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const validateId = (value) => {
    const idRegex = /^[가-힣a-zA-Z0-9]{1,10}$/;
    return idRegex.test(value);
  };

  const validatePassword = (value) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,15}$/;
    return passwordRegex.test(value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateId(id)) {
      alert('아이디는 한글, 영어, 숫자를 이용하여 10자이내로 띄어쓰기 없이 입력가능합니다.');
      return;
    }
    if (!validatePassword(password)) {
      alert('비밀번호는 영어와 숫자를 포함하여 띄어쓰기 없이 15자 이내로 입력가능합니다.');
      return;
    }
    // Implement login logic here
    alert('Login successful');
  };

  return (
    <div className="login-container">
      <div className="logo">ACOMO</div> {/* ACOMO Logo */}
      <form className="login-form" onSubmit={handleLogin}>
        <h1 className="login-title">ACOMO(아마도 코딩의 모든 것)을 시작하세요!</h1>
        <div className="input-container">
          <label>ID</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter your ID"
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />
        </div>
        <div className="button-container">
          <button type="submit" className="login-button">로그인</button>
          <button type="button" className="register-button">회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
