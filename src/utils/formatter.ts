export default function formatter(text: string): Array<string> {
    const raw_input = text.split(' ')
    const garbage = ["*", "(Currently", "using", "64-bit", "executable", "\n", "executable)\n", ""]
    let versions : string[] = raw_input.filter(
        v=> !garbage.includes(v)
    )
    versions = versions.map(
        v=> v.split('\n')[0]
    )
    return versions
}