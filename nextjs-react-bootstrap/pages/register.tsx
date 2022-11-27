import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styles from '../styles/Home.module.css'
import { useState } from 'react';

function register() {

  const  [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const {username, email, password} = formData

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
      email,
      password
    }

    console.log(userData)
  }

  return (
    <>
    <h2 className={styles.title}>Register</h2>
    <Form className={styles.form}>
      <Form.Group className="mb-4" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" onChange={onChange} value={username} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={onChange} value={email} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" onChange={onChange} value={password}/>
      </Form.Group>

      <Button variant="primary" type="submit" onSubmit={onSubmit} className={styles.btn}>
        Submit
      </Button>
    </Form>
    </>

  )
}
export default register