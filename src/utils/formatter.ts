export default function (text: string): Array<string> {
    const raw_input = text.split(' ')
    const garbage = ["*", "(Currently", "using", "64-bit", "executable"]
    const versions = [] = raw_input.filter(
        v=> !garbage.includes(v)
    )
    return versions
}