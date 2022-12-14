import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './SignupForm.module.css'
import * as authService from '../../services/authService'

const SignupForm = (props) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  })
  
  const handleChange = e => {
    props.updateMessage('')
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await authService.signup(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
  }
  
  const { name, email, password, passwordConf } = formData
  
  const isFormInvalid = () => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          autoComplete="off"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={email}
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
          value={password}
          name="password"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="confirm" className="form-label">Confirm Password</label>
        <input
          type="password"
          autoComplete="off"
          id="confirm"
          value={passwordConf}
          name="passwordConf"
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className={styles.inputContainer}>
        <button disabled={isFormInvalid()} className="btn btn-primary">Sign Up</button>
        <Link to="/">
          <button className='btn btn-outline-danger'>Cancel</button>
        </Link>
      </div>
    </form>
  );
}
 
export default SignupForm;