import CodeBlock from "./CodeBlock"
import Hi from "./Hi"

const codeRouterMain = `import { HashRouter, Route, Routes } from "react-router-dom"

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
`

const codeLink = `import { BsGithub } from "react-icons/bs"
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
`

export default function RouterSetting() {
    return (
        <>
            <h3 className="text-xl font-bold">Jika Kamu Pakai React Router</h3>
            <p className="indent-4 underline underline-offset-2">
                Jika kamu pakai <Hi>react-router-dom</Hi>, maka diperlukan
                beberapa tambahan setting yang perlu kamu ikuti, antara lain:
            </p>
            <ol className="list-[auto] pl-4 pr-1 flex flex-col gap-2">
                <li>
                    <div>
                        <h4 className="font-medium">
                            Gunakan HashRouter daripada BrowserRouter
                        </h4>
                        <CodeBlock codeType="tsx">{codeRouterMain}</CodeBlock>
                    </div>
                </li>
                <li>
                    <div>
                        <h4 className="font-medium">
                            Gunakan Komponen Link / NavLink
                        </h4>
                        <CodeBlock codeType="tsx">{codeLink}</CodeBlock>
                    </div>
                </li>
            </ol>
        </>
    )
}
