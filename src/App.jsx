import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState()

  useEffect(() => {
    axios.get('https://ipapi.co/json/')
      .then(data => setUser(data))
      .catch(err => console.log(err.message))
  }, [count]
  )
  console.log(user)

  return (
    <div className="card">
      {user ? <h3>ip: {user.data.ip}</h3> : <h2>Loading...</h2>}
      <button onClick={() => setCount((count) => count + 1)}>
        Check VPN
      </button>
    </div>

  )

}

export default App
