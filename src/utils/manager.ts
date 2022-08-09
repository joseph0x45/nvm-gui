import { invoke } from "@tauri-apps/api";
export async function get_current_version() : Promise<string> {
    let current = await invoke('get_node_version') as string
    return current
}

export async function get_versions_list(): Promise<string> {
    let versions = await invoke('get_all_versions') as string
    return versions
}

export async function change_version( version: string ) : Promise<string> {
    let change_result = await invoke('change_version', {version: version}) as string
    return change_result
}

const manager = {
    get_versions_list,
    get_current_version,
    change_version
}

export default manager