import React from 'react'
import styles from './Form.module.css'

function Form({
  name,
  setName,
  email,
  setEmail,
  username,
  setUsername,
  mobile,
  setMobile,
  error,
  setError,
  submitHandler
}) {

  return (
    <div className={styles.container}>

        <input 
        type="text"
        placeholder='Name'
        value={name}
        onChange={(e)=>setName(e.target.value)} />
        {error?.name && <p className ={styles.error}>Field is required</p>}

        <input 
        type="text"
        placeholder='Username'
        value={username}
        onChange={(e)=>setUsername(e.target.value)} />
        {error?.username && <p className ={styles.error}>Field is required</p>}

        <input 
        type="email"
        placeholder='Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />
        {error?.email && <p className ={styles.error}>Field is required</p>}

        <input 
        type="text"
        placeholder='Mobile'
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)} />
        {error?.mobile && <p className ={styles.error}>Field is required</p>}
        
        <button onClick={submitHandler}>SIGN UP</button>
    </div>
  )
}

export default Form;