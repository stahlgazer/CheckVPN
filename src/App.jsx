import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)
  const [user, setUser] = useState()

  // useEffect(() => {
  //   axios.get('https://ipapi.co/json/')
  //     .then(data => setUser(data.data))
  //     .catch(err => console.log(err.message))
  // }, [count])

  useEffect(() => {
    let ignore = false;
    axios.get('https://ipapi.co/json/').then(result => {
      if (!ignore) {
        setUser(result.data);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  // console.log(user)

  return (
    <>
      {user &&
        <div className="card">
          <div className="card-row">
            <p>IP Address</p> <p>{user.ip}</p></div>
          <div className="card-row">
            <p>City</p> <p>{user.city}</p></div>
          <div className="card-row">
            <p>Region</p> <p>{user.region}</p></div>
          <div className="card-row">
            <p>Country</p> <p>{user.country}</p></div>
          <div className="card-row">
            <p>Zip Code</p>  <p>{user.postal}</p></div>
          <div className="card-row">
            <p>Continent</p> <p>{user.continent_code}</p></div>
          <div className="card-row">
            <p>Latitude / Longitude</p> <p>{user.latitude}, {user.longitude}</p></div>
          <div className="card-row">
            <p>Time Zone</p> <p>{user.timezone}</p></div>
          <div className="card-row">
            <p>Calling Code</p> <p>{user.country_calling_code}</p></div>
          <div className="card-row">
            <p>Currency</p> <p>{user.currency_name}</p></div>
          <div className="card-row">
            <p>Languages</p> <p>{user.languages}</p></div>
          <div className="card-row">
            <p>ASN</p> <p>{user.asn}</p></div>
          <div className="card-row">
            <p>ORG</p> <p>{user.org}</p></div>
          <button onClick={() => setCount((count) => count + 1)}>
            Check VPN
          </button>
        </div>}
    </>
  )
}

export default App
