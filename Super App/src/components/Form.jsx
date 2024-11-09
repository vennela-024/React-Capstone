import React from 'react'
import { useState } from 'react'
import styles from './Form.module.css'
import validateForm from '../utils/validateForm'

function Form({}) {

    const [name, setName] = useState("")
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [error, setError] = useState("")


  return (
    <div className={styles.container}>

        <input 
        type="text"
        placeholder='Name'
        value={name}
        onChange={(e)=>setName(e.target.value)} />

        <input 
        type="text"
        placeholder='Username'
        value={username}
        onChange={(e)=>setUserName(e.target.value)} />

        <input 
        type="email"
        placeholder='Email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)} />

        <input 
        type="text"
        placeholder='Mobile'
        value={mobile}
        onChange={(e)=>setMobile(e.target.value)} />
        
        <button onClick={() => validateForm(name, email, username, mobile)}>SIGN UP</button>
    </div>
  )
}

export default Form