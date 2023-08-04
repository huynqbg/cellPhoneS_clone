export default function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')
}

const roots = new Map()

function render() {
    for (const [root, component] of roots) {
        const output = component()
        root.innerHTML = output
    }
}

function attach(component, root) {
    roots.set(root, component)
    render()
}

export { attach }