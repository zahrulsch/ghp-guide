import { defineConfig } from "vite"
import { prismjsPlugin } from "vite-plugin-prismjs"
import react from "@vitejs/plugin-react-swc"

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
})
