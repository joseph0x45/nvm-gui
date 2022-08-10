import { useState } from 'react'
import Welcome from './components/welcome'
import { invoke } from '@tauri-apps/api/tauri'
import VersionTile from './components/version_tile'
import { useEffect } from 'react'
import formatter from './utils/formatter'
import { useAppDispatch, useAppSelector } from './hooks'
import { change } from './slice'


function App() {
  const versionState = useAppSelector(state => state.version)
  const dispatch = useAppDispatch()
  
  const [currentVersion, setCurrentVersion] = useState(versionState.value)
  const [all_versions, setVersions] = useState([""])
  async function getCurrentVersion() {
    let current = await invoke('get_node_version') as string
    current = current.replace(/(\r\n|\n|\r)/gm, "")
    dispatch(change(current))
    setCurrentVersion(versionState.value)
    
  }

  useEffect(
    ()=>{
      getCurrentVersion()
      const fetch_versions =async () => {
        const result = await invoke('get_all_versions') as string
        return result
      }
      fetch_versions().then(result => {
        const versionSet = formatter(result)
        setVersions(versionSet)
      })
    },
    []
  )

  return (
    <div>
      <Welcome versions_count={all_versions.length.toString()} />
      <div className=' overflow-y-scroll pt-3 space-y-3 h-40 border-2'>
        {
          all_versions.map(
            v=>{            
              return <VersionTile version={v}  />
            }
          )
        }
      </div>
      <p>{versionState.value}</p>
    </div>
  )
}

export default App
