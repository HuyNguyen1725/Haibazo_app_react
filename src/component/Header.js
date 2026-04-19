import { useContext, useState } from "react"
import { LocationContext } from "./LocationContext"
import { FaCaretRight } from "react-icons/fa"

function Header() {
    const { category, child } = useContext(LocationContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3"
            style={{ height: 50 }}
        >
            <a href="/" className="navbar-brand fw-bold">HAIBAZO BOOK REVIEW</a>
            {category !== "" ?
            <span className="navbar-text text-white fw-bold" style={{ marginLeft: 120 }}>
                {category} <FaCaretRight/> {child}
            </span>
            : null}
        </nav>
    )
}

export default Header