export default function Welcome(props:{ "versions_count":string }){
    return(
        <>
            <div className=" text-center">
                {props.versions_count} versions found
            </div>
        </>
    )
}