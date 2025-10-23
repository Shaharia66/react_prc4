import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CollegeData from './nestedLoop'
import Effect from './Hooks_useEffect'
import Effects from './Hooks_useEffect'
import Comp1 from './hooks_hndlprops'
import Dynamic from './DynamicCSS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <CollegeData/> */}
        {/* <Effects/> */}
        {/* <Comp1/> */}
        <Dynamic/>

      </div>
    </>
  )
}

export default App
