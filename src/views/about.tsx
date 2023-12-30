export type AboutProps = {
    children?: React.ReactNode
    className?: string
}

export default function About(props: AboutProps) {
    const { children, className } = props

    return (
        <div className={className}>
            {children}
            <p>Saya Halaman About</p>
        </div>
    )
}
