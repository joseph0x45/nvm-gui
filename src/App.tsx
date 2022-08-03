import { useState } from 'react'
import Welcome from './components/welcome'
import { invoke } from '@tauri-apps/api/tauri'
import VersionTile from './components/version_tile'
import { versions } from './__mocks__/versions'
import { useEffect } from 'react'

function App() {
  const buh = "okok \n okok"
  const [currentVersion, setCurrentVersion] = useState("")
  const [all_versions, setVersions] = useState("")
  async function change_version() {
    let result = await invoke('change_version') as string
    setCurrentVersion(result)
  }
  async function getCurrentVersion() {
    let current = await invoke('get_node_version') as string
    setCurrentVersion(current)

  }

  useEffect(
    ()=>{
      const fetch_versions =async () => {
        const result = await invoke('get_all_versions') as string
        return result
      }
      fetch_versions().then(result => {
        setVersions(result)
      })
    },
    []
  )

  return (
    <>
      <div className=''  >
        <Welcome />
        <span className='whitespace-pre-line'>
          { all_versions }
        </span>
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
