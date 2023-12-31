import{j as e}from"../../index.js";import{C as n}from"./code-block.6fdb67560383282ddd23bf5d4dae751a31541d73.chunk.js";import{H as i}from"./index.e540cdd1328b2b21e29a95405c301b9313b7c346.chunk.js";const a=`import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"

export default defineConfig({
    plugins: [react()],
    /** Tambah key base dan isi dengan string kosong */
    base: "",
})
`;function o(){return e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"text-xl font-bold",children:"Jika Kamu Pakai Vite"}),e.jsxs("p",{className:"indent-4 underline underline-offset-2",children:["Jika kamu pakai ",e.jsx(i,{children:"vite"})," sebagai bundler, maka buka file"," ",e.jsx(i,{children:"vite.config.js"})," kemudian tambahkan key ",e.jsx(i,{children:"base"})," dan isi value dengan string kosong ",e.jsx(i,{children:'""'}),":"]}),e.jsx(n,{codeType:"tsx",children:a})]})}export{o as default};
