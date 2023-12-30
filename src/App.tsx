import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Index from "./views"
import About from "./views/about"

const routes = [
    {
        path: "/",
        element: <Index />,
    },
    {
        path: "/about",
        element: <About />,
    },
]

const ig = "https://www.instagram.com/zahrulsch/"

function App() {
    return (
        <BrowserRouter>
            <div className="w-full">
                <Header />
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
        </BrowserRouter>
    )
}

export default App
