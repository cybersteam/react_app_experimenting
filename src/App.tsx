import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Footer from './Footer'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div>
        <h3>This is a React JS, Vite TS App</h3>
      </div>
      <Footer />
     
    </div>
    
  )
}

export default App
