import { useContext, useState } from "react"
import { LocationContext } from "./LocationContext"

function Header() {
    const { category, child } = useContext(LocationContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3"
            style={{ height: 50 }}
        >
            <a href="/" className="navbar-brand fw-bold">HAIBAZO BOOK REVIEW</a>
            <span className="navbar-text text-white fw-bold" style={{ marginLeft: 120 }}>
                {category !== "" ? `${category} -> ${child}` : null}
            </span>
        </nav>
    )
}

export default Header