import { useState } from 'react'
import Welcome from './components/welcome'
import { invoke } from '@tauri-apps/api/tauri'
import VersionTile from './components/version_tile'
import { versions } from './__mocks__/versions'
import { useEffect } from 'react'

function App() {
  const [currentVersion, setCurrentVersion] = useState('')
  async function change_version() {
    let bruh = await invoke('change_version') as string
    setCurrentVersion(bruh)
  }
  async function getCurrentVersion() {
    let current = await invoke('get_node_version') as string
    setCurrentVersion(current)
    console.log(current);

  }

  useEffect(
    ()=>{
      let all_versions =  new Promise(
        async (resolve, reject) => {
          let versions = await invoke('get_all_versions') as string
          resolve(versions)
          reject('error')
        }
      )
      all_versions.then(
        (result) => {
          console.log(result);
        }
      )
    },
    []
  )

  return (
    <>
      <div className=''  >
        <Welcome />
        <hr className=' border-2' />
        <div className=' flex justify-center'>
          <button onClick={change_version}>Get current version</button>
          {
            currentVersion && <p>{currentVersion}</p>
          }
        </div>
        {
          versions.map(
            version => {
              return (
                <VersionTile is_current={version.is_current} version={version.version} />
              )
            }
          )
        }
      </div>
    </>
  )
}

export default App
