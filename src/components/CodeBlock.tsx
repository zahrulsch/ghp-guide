import { useEffect, useState } from "react"
import Prism, { highlight } from "prismjs"
import "../code.css"

type Codes = "javascript" | "bash"

export type CodeBlockProps = {
    children?: string
    className?: string
    codeType?: Codes
}

export default function CodeBlock(props: CodeBlockProps) {
    const { children, codeType = "json" } = props
    const [content, setContent] = useState("")

    useEffect(() => {
        if (children) {
            const content = highlight(
                children,
                Prism.languages[codeType],
                codeType
            )
            setContent(content)
        }
    }, [children, codeType])

    return (
        <pre className={`language-${codeType} rounded-md !font-mono`}>
            <code
                className={`language-${codeType}`}
                dangerouslySetInnerHTML={{ __html: content }}
            ></code>
        </pre>
    )
}
