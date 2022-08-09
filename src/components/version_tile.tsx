import { useState } from "react"
import { message } from '@tauri-apps/api/dialog';
import manager from "../utils/manager"

export default function VersionTile(
    props:{
        "version": string,
        "is_current": boolean
    }
){
    
    async function change_version(){
        if (props.is_current){
            message("You are already on this version")
            return
        }
        let result = await manager.change_version(props.version)
        console.log(result);    
    }
    
    return(
        <>
            <div onClick={change_version} className=" bg-red-300 mx-6 rounded-lg flex space-x-2 px-4 hover:bg-green-400">
                <div >v {props.version}  { props.is_current?"*":"" } </div>
            </div>
        </>
    )
}

export interface version{
    version: string,
    is_current: boolean,
}