import { useState } from 'react'
import Welcome from './components/welcome'
import { invoke } from '@tauri-apps/api/tauri'
import VersionTile from './components/version_tile'
import { versions } from './__mocks__/versions'

function App() {
  const [count, setCount] = useState(0)
  const [currentVersion, setCurrentVersion] = useState('')
  async function run(){
    let bruh = await invoke('execute_command', { command: 'nvm' })
    console.log(bruh);
  }
  async function getCurrentVersion(){
    let current = await invoke('get_node_version')
    console.log(current);
    
  }
  return (
    <div className=''  >
      <Welcome />
      <hr className=' border-2' />
      <div className=' flex justify-center'>
        <button onClick={getCurrentVersion}>Get current version</button>
      </div>
      {
        versions.map(
          version=>{
            return(
              <VersionTile is_current={version.is_current} version={version.version} />
            )
          }
        )
      }
    </div>
  )
}

export default App
 