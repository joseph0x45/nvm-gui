import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { invoke } from '@tauri-apps/api/tauri'
import VersionTile from './components/version_tile'

function App() {
  const [count, setCount] = useState(0)
  async function run(){
    let bruh = await invoke('execute_command', { command: 'nvm' })
    console.log(bruh);
    
  }
  return (
    <div className=' text-green-700 bg-fuchsia-400' onClick={run} >
      bruh <br />
      <VersionTile/>
    </div>
  )
}

export default App
 