import React, { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/posts/6284f0976b9ce62d455bd68a')
      .then((res) => res.json())
      .then((res) => setData(res.author))
  }, [])

  return (
    <div className="file-manager">
      <p>{!data ? 'Loading...' : data}</p>
    </div>
  )
}

export default App
