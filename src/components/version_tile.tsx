import { useState } from "react"
import manager from "../utils/manager"

export default function VersionTile(props: version){
    const { is_current, version } = props
    const [is_selected, setIsSelected] = useState(false)
    async function onClick(){
        let result = await manager.change_version(version)
        console.log(result);
        
    }
    return(
        <>
            <div className=" flex space-x-2 px-4">
                <div>
                    <input type="radio" name="version_tile" id="vst" onClick={onClick} />
                </div>
                <div>Version {version}</div>
            </div>
        </>
    )
}

export interface version{
    version: string,
    is_current: boolean,
}