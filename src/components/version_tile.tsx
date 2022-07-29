export default function VersionTile(props: version){
    return(
        <>
            <div className=" flex space-x-2">
                <div>
                    <input type="checkbox" name="is_current" id="is_crnt" checked={props.is_current} />
                </div>
                <div>Version {props.version}</div>
            </div>
        </>
    )
}

export interface version{
    version: string,
    is_current: boolean,
}