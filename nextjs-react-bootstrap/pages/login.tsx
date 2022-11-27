import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../styles/Home.module.css'


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
    <>
    <h2 className={styles.title}>Login</h2>
    <Form className={styles.form}>
      <Form.Group className="mb-4" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChange={onChange} value={username} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" onChange={onChange} value={password} />
      </Form.Group>

      <Button variant="primary" type="submit" onSubmit={onSubmit} className={styles.btn}>
        Submit
      </Button>
    </Form>
    </>

  )
}
export default login