import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./src/**/*.{ts,tsx,html}",
        "./src/*.{ts,tsx,html}",
        "./*.{ts,tsx,html}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: `Roboto, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
                mono: `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
            },
        },
    },
    plugins: [],
}

export default config
