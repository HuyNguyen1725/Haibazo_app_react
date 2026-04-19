import { useContext } from "react"
import { LocationContext } from "./LocationContext"
import { FaCaretRight } from "react-icons/fa"

function BreadCrumb() {
    const { category, child } = useContext(LocationContext)
    return (
        <div className="breadCrumb">
            {category !== "" ?
            <span className="navbar-text text-black fw-bold" style={{ marginLeft: 120 }}>
                {category} <FaCaretRight/> {child}
            </span>
            : null}
        </div>
    )
}

export default BreadCrumb