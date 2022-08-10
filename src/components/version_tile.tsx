import { useState } from "react"
import { message } from '@tauri-apps/api/dialog';
import manager from "../utils/manager"
import { useAppDispatch, useAppSelector } from '../hooks'
import { change } from '../slice'

export default function VersionTile(
    props:{
        "version": string
    }
){
    const [is_current, setIsCurrent] = useState('')
    const dispatch = useAppDispatch()
    async function change_version(){
        if (props){
            message("You are already on this version")
            return
        }
        let result = await manager.change_version(props.version)
        dispatch(change('v14.17.3'))
    }
    
    return(
        <>
            <div onClick={change_version} className=" bg-red-300 mx-6 rounded-lg flex space-x-2 px-4 hover:bg-green-400">
                <div >v{props.version}  { is_current?"*":"" }  </div>
            </div>
        </>
    )
}

