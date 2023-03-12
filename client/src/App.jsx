import React, { useEffect, useState } from 'react'
import axios from 'axios';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  const client = axios.create({
    baseURL: "/api"
  });

  useEffect(() => {
    client.get().then(
      response => {
        setBackendData(response.data);
      }
    )
  }, []);

  return (
    <div>

      {(typeof backendData.names === 'undefined') ?
        (
          <p>loading</p>
        ) :
        (
          backendData.names.map((name, i) => {
            return <p key={i}>{name}</p>
          })
        )
      }


    </div>
  )
}

export default App

