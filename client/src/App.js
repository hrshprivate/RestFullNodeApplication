import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/posts/')
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={process.env.REACT_APP_API_URL + data[0].picture}
      />
      <Card.Body>
        <Card.Title>Read</Card.Title>
        <Card.Text>axscdvfgbfds</Card.Text>
        <Button variant="primary">:D</Button>
      </Card.Body>
    </Card>
  )
}

export default App
