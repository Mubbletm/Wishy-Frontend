import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useAuthorization } from './hooks/api/http/useAuthorization'
import { useWishlists } from './hooks/api/wishlists/useWishlists'

function App() {
  const [count, setCount] = useState(0)
  const id = useAuthorization()

  const {status, data} = useWishlists();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {
        status === 'pending' ? 'Loading...' :
        status === 'error' ? 'error' :
        data.map(o => <div>
          <span>
          Wishlist[{o.id}]
          </span>
          <p>{o.name}: {o.permission}</p>
        </div>)
        // data.items?.map(item => 
        //   <a href={item.url}>
        //     <p>{item.name}</p>
        //     <img src={item.image}></img>
        //     <span>{item.id}</span>
        //   </a>
        // )
      }
      <p>Ownership[{id}]</p>
    </>
  )
}

export default App
