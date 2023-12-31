import { lazy, Suspense } from "react"
import { HashRouter, Route, Routes } from "react-router-dom"
const Header = lazy(() => import("./components/Header"))
const Index = lazy(() => import("./views"))
const About = lazy(() => import("./views/about"))

const routes = [
    {
        path: "/",
        element: (
            <Suspense>
                <Index />
            </Suspense>
        ),
    },
    {
        path: "/about",
        element: (
            <Suspense>
                <About />
            </Suspense>
        ),
    },
]

const ig = "https://www.instagram.com/zahrulsch/"

function App() {
    return (
        <HashRouter>
            <div className="w-full">
                <Suspense>
                    <Header />
                </Suspense>
                <div className="container-sm mt-2">
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
                <footer className="p-3 bg-stone-100 py-6 text-sm">
                    <p className="text-center">
                        Tutorial Gratis ReactJS By{" "}
                        <a
                            href={ig}
                            target="_blank"
                            className="underline underline-offset-2"
                        >
                            Mantracode
                        </a>
                    </p>
                    <div className="flex gap-2 justify-center mt-2.5">
                        <img
                            src="./typescript.svg"
                            alt="Typescript"
                            className="w-5 rounded"
                        />
                        <img src="./react.svg" alt="ReactJS" className="w-5" />
                        <img src="./vite.svg" alt="Vite" className="w-5" />
                    </div>
                </footer>
            </div>
        </HashRouter>
    )
}

export default App
