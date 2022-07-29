export default function VersionTile(props: version){
    return(
        <>
            <div>
                I am a version
            </div>
        </>
    )
}

export interface version{
    version: string,
    is_current: boolean,
}