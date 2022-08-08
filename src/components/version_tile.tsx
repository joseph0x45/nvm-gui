import { useState, useRef } from "react"
import manager from "../utils/manager"

export default function VersionTile(props: version){
    const { is_current, version } = props
    const [is_selected, setIsSelected] = useState(false)
    const ref = useRef<HTMLInputElement>(null)
    
    async function onClick(){
        let result = await manager.change_version(version)
        console.log('result');    
    }

    function is_ckecked() {
        alert("Version already in use")        
    }
    
    return(
        <>
            <div className=" bg-red-300 mx-6 rounded-lg flex space-x-2 px-4">
                <div>
                    <input type="radio" checked={props.is_current} name="version_tile" id="vst" />
                </div>
                <div> {version}</div>
            </div>
        </>
    )
}

export interface version{
    version: string,
    is_current: boolean,
}