import CodeBlock from "./CodeBlock"
import Hi from "./Hi"

const codeViteSetting = `import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
    plugins: [react()],
    /** Tambah key base dan isi dengan string kosong */
    base: "",
})
`

export default function ViteSetting() {
    return (
        <>
            <h3 className="text-xl font-bold">Jika Kamu Pakai Vite</h3>
            <p className="indent-4 underline underline-offset-2">
                Jika kamu pakai <Hi>vite</Hi> sebagai bundler, maka buka file{" "}
                <Hi>vite.config.js</Hi> kemudian tambahkan key <Hi>base</Hi> dan
                isi value dengan string kosong <Hi>""</Hi>:
            </p>
            <CodeBlock codeType="tsx">{codeViteSetting}</CodeBlock>
        </>
    )
}
