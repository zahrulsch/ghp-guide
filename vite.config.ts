import { defineConfig } from "vite"
import { prismjsPlugin } from "vite-plugin-prismjs"
import react from "@vitejs/plugin-react-swc"
import path from "path"
import sha1 from "crypto-js/sha1"

const slugify = (text: string, content?: string | Uint8Array) => {
    const temp: Array<string> = []
    let hash = ""

    if (content) {
        content = String(content)
        hash = sha1(content).toString()
    }

    text.split("").forEach((char) => {
        if (!/[A-Za-z]/g.test(char)) {
            temp.push("")
            return
        }

        if (char !== char.toUpperCase()) {
            const len = temp.length

            if (!len) {
                temp[0] = char
                return
            }

            temp[len - 1] = temp[len - 1] + char
            return
        }

        temp.push(char.toLowerCase())
    })

    if (hash) {
        return temp.join("-") + "." + hash
    }

    return temp.join("-")
}

export default defineConfig({
    plugins: [
        react(),
        prismjsPlugin({
            languages: [
                "bash",
                "javascript",
                "json",
                "typescript",
                "jsx",
                "tsx",
            ],
        }),
    ],
    base: "",
    build: {
        rollupOptions: {
            output: {
                chunkFileNames(info) {
                    return `assets/js/${slugify(info.name, info.name)}.chunk.js`
                },
                entryFileNames(info) {
                    return `${slugify(info.name)}.js`
                },
                assetFileNames(info) {
                    const { ext, name } = path.parse(info.name)

                    switch (ext) {
                        case ".css":
                            return `assets/css/${slugify(
                                name,
                                info.source
                            )}${ext}`
                        case ".jpg":
                        case ".webp":
                        case ".png":
                            return `assets/images/${slugify(
                                name,
                                info.source
                            )}${ext}`
                        default:
                            return `assets/[name].[ext]`
                    }
                },
            },
        },
        chunkSizeWarningLimit: 2000,
    },
})
