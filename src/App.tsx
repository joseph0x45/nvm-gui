import { useState } from 'react'
import Welcome from './components/welcome'
import { invoke } from '@tauri-apps/api/tauri'
import VersionTile from './components/version_tile'

function App() {
  const [count, setCount] = useState(0)
  async function run(){
    let bruh = await invoke('execute_command', { command: 'nvm' })
    console.log(bruh);
    
  }
  return (
    <div className=''  >
      <Welcome />
      <VersionTile/>
    </div>
  )
}

export default App
 