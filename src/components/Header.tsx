import {
    FloatingOverlay,
    FloatingPortal,
    autoUpdate,
    flip,
    shift,
    size,
    useDismiss,
    useFloating,
    useInteractions,
} from "@floating-ui/react"
import { useState } from "react"
import { BsGithub, BsX } from "react-icons/bs"
import { CiMenuFries } from "react-icons/ci"
import { NavLink } from "react-router-dom"

export type HeaderProps = {
    children?: React.ReactNode
    className?: string
}

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

export default function Header(props: HeaderProps) {
    const [open, setOpen] = useState(false)
    const { context, refs, floatingStyles } = useFloating({
        open,
        onOpenChange: setOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            flip(),
            shift(),
            size({
                apply({ availableHeight, elements }) {
                    elements.floating.style.height = availableHeight + "px"
                },
            }),
        ],
        placement: "bottom",
    })

    const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" })
    const { getFloatingProps, getReferenceProps } = useInteractions([dismiss])

    return (
        <>
            <header
                className="z-50 sticky top-0 bg-white shadow-sm"
                ref={refs.setReference}
                {...getReferenceProps()}
                {...props}
            >
                <div className="container-sm flex justify-between items-center">
                    <NavLink className="text-2xl" to="/">
                        <BsGithub />
                    </NavLink>
                    <div className="gap-2 hidden sm:inline-flex">
                        {navs.map((nav) => (
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "uppercase text-sm p-2 bg-slate-900 text-white"
                                        : "uppercase text-sm p-2"
                                }
                                key={nav.key}
                                to={nav.href}
                            >
                                {nav.text}
                            </NavLink>
                        ))}
                    </div>
                    <button
                        onClick={() => setOpen((v) => !v)}
                        className={"py-2 sm:hidden"}
                        tabIndex={0}
                    >
                        {open ? (
                            <BsX className="text-xl" />
                        ) : (
                            <CiMenuFries className="text-xl" />
                        )}
                    </button>
                </div>
            </header>
            {open ? (
                <FloatingPortal>
                    <FloatingOverlay lockScroll className="z-10">
                        <div
                            className="bg-white w-full"
                            ref={refs.setFloating}
                            style={floatingStyles}
                            {...getFloatingProps()}
                        >
                            <ul className="flex flex-col py-2">
                                {navs.map((nav) => (
                                    <NavLink
                                        className="py-3 px-4"
                                        to={nav.href}
                                        key={nav.key}
                                        onClick={() => setOpen(false)}
                                    >
                                        {nav.text}
                                    </NavLink>
                                ))}
                            </ul>
                        </div>
                    </FloatingOverlay>
                </FloatingPortal>
            ) : null}
        </>
    )
}
