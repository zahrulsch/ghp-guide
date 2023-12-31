import{j as e}from"../../index.js";import{C as t}from"./code-block.6fdb67560383282ddd23bf5d4dae751a31541d73.chunk.js";import{H as a}from"./index.e540cdd1328b2b21e29a95405c301b9313b7c346.chunk.js";const r=`import { HashRouter, Route, Routes } from "react-router-dom"

export type AppRoute = {
    element: React.ReactNode
    path: string
    key?: string | number
}

/** isi dengan rute yang tersedia */
const routes: AppRoute[] = [ ... ]

function App() {
    return (
        <HashRouter>
            <div className="w-full">
                <Header />
                <Routes>
                    {routes.map((route) => (
                        <Route
                            key={route.path}
                            element={route.element}
                            path={route.path}
                        />
                    ))}
                </Routes>
            </div>
        </HashRouter>
    )
}

export default App
`,s=`import { BsGithub } from "react-icons/bs"
import { NavLink } from "react-router-dom"

const navs = [
    {
        key: 0,
        href: "/",
        text: "Main",
    },
    {
        key: 1,
        href: "/about",
        text: "Tentang Penulis",
    },
]

export default function Header() {
    return (
        <header className="z-50 sticky top-0 bg-white shadow-sm">
            <div className="container-sm py-2 flex justify-between items-center">
                <NavLink className="text-2xl" to="/">
                    <BsGithub />
                </NavLink>
                <div className="gap-2 hidden sm:flex">
                    {navs.map((nav) => (
                        <NavLink
                            className="uppercase text-sm px-2 bg-slate-900 text-white rounded pt-0.5"
                            key={nav.key}
                            to={nav.href}
                        >
                            {nav.text}
                        </NavLink>
                    ))}
                </div>
            </div>
        </header>
    )
}
`;function u(){return e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"text-xl font-bold",children:"Jika Kamu Pakai React Router"}),e.jsxs("p",{className:"indent-4 underline underline-offset-2",children:["Jika kamu pakai ",e.jsx(a,{children:"react-router-dom"}),", maka diperlukan beberapa tambahan setting yang perlu kamu ikuti, antara lain:"]}),e.jsxs("ol",{className:"list-[auto] pl-4 pr-1 flex flex-col gap-2",children:[e.jsx("li",{children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Gunakan HashRouter daripada BrowserRouter"}),e.jsx(t,{codeType:"tsx",children:r})]})}),e.jsx("li",{children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Gunakan Komponen Link / NavLink"}),e.jsx(t,{codeType:"tsx",children:s})]})})]})]})}export{u as default};
