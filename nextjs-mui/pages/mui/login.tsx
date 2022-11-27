import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from '../../styles/Home.module.css'
import { useState } from 'react';


function login() {
  const  [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const {username, password} = formData

  const onChange = (e:any) => {
    setFormData((prevState => ({
      ...prevState,
      [e.target.id] : e.target.value
    })))
  }
 
  const onSubmit = (e:any) => {
    e.preventDefault()

    const userData = {
      username,
      password
    }

    console.log(userData)
  }

  return (
    <div>
        <h1 className={styles.title}>Login Page</h1>

        <section className={styles.form}>
          <form>
          <div className={styles.formGroup}>
            <TextField fullWidth id="username" label="Username" variant="standard" onChange={onChange} value={username} />
          </div>
          <div className={styles.formGroup}>
            <TextField fullWidth id="password" label="Password" variant="standard" onChange={onChange} value={password} />
          </div>
          <div className={styles.submitBtn}>
            <Button variant="contained" size="large" onClick={onSubmit}>Login</Button>
          </div>
        </form>
        </section>

    </div>
  )
}
export default login