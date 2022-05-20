import React, { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/posts/')
      .then((res) => res.json())
      .then((res) => setData(res))
  }, [])

  return (
    <div className="file-manager">
      <p>{!data ? 'Loading...' : `${data[0].author}`}</p>
    </div>
  )
}

export default App
