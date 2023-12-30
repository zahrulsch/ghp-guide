export type HiProps = {
    children?: React.ReactNode
    className?: string
}

export default function Hi(props: HiProps) {
    const { children } = props

    return (
        <code className="font-mono text-sm bg-yellow-100 px-1 rounded font-medium py-0.5">
            {children}
        </code>
    )
}
