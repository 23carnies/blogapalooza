import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'

const LoginForm = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    pw: ''
  })
  const navigate = useNavigate()

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value 
    })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    authService.login(formData)
    .then(() => {
      props.handleSignupOrLogin()
      navigate('/')
    })
    .catch(err => {
      alert('Invalid Credentials')
    })
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div>
        <button className="btn btn-primary mr-2">Log In</button>
        <Link to="/">
          <button className='btn btn-outline-danger ml-2'>Cancel</button>
        </Link>
      </div>
    </form>
  );
}
 
export default LoginForm;