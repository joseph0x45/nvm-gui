import { useState } from 'react'
import Welcome from './components/welcome'
import { invoke } from '@tauri-apps/api/tauri'
import VersionTile from './components/version_tile'
import { versions } from './__mocks__/versions'
import manager from './utils/manager'

function App() {
  const [count, setCount] = useState(0)
  const [currentVersion, setCurrentVersion] = useState('')
  async function run(){
    //let bruh = await invoke('execute_command', { command: 'nvm' })
    let bruh = await invoke('change_version') as string
    console.log(bruh);
    setCurrentVersion(bruh)
  }
  async function getCurrentVersion(){
    let current = await invoke('get_node_version') as string
    setCurrentVersion(current)
    console.log(current);
    
  }
  return (
    <div className=''  >
      <Welcome />
      <hr className=' border-2' />
      <div className=' flex justify-center'>
        <button onClick={run}>Get current version</button>
        {
          currentVersion && <p>{currentVersion}</p>
        }
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
 