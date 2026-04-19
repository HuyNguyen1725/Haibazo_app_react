import { useState } from "react"
import { Link } from "react-router-dom"
import { FaUser, FaBook, FaComment, FaChevronDown, FaChevronUp, FaList, FaPlus } from "react-icons/fa"

function MenuLeft() {
    const [isDownA, setIsDownA] = useState(false)
    const [isDownB, setIsDownB] = useState(false)
    const [isDownR, setIsDownR] = useState(false)


    function handleUpDownA() {
        setIsDownA(!isDownA)
    }
    function handleUpDownB() {
        setIsDownB(!isDownB)
    }
    function handleUpDownR() {
        setIsDownR(!isDownR)
    }

    return (
        <div className="d-flex flex-column align-items-center mt-3">
            <a className="list-group-item list-group-item-action text-center fw-bold"
                data-bs-toggle="collapse"
                href="#authorMenu"
                onClick={handleUpDownA}
            >
                <FaUser/> Author {isDownA ? <FaChevronUp/> : <FaChevronDown/>}
            </a>
            <div className="collapse" id="authorMenu">
                <Link to="/authorList" className="list-group-item ms-3"><FaList/> List</Link>
                <Link to="/createAuthor" className="list-group-item ms-3"><FaPlus/> Create</Link>
            </div>
        
            <a className="list-group-item list-group-item-action text-center fw-bold"
                data-bs-toggle="collapse"
                href="#bookMenu"
                onClick={handleUpDownB}
            >
                <FaBook/> Book {isDownB ? <FaChevronUp/> : <FaChevronDown/>}
            </a>
            <div className="collapse" id="bookMenu">
                <Link to="/bookList" className="list-group-item ms-3"><FaList/> List</Link>
                <Link to="/createBook" className="list-group-item ms-3"><FaPlus/> Create</Link>
            </div>

            <a className="list-group-item list-group-item-action text-center fw-bold"
                data-bs-toggle="collapse"
                href="#reviewMenu"
                onClick={handleUpDownR}
            >
                <FaComment/> Review {isDownR ? <FaChevronUp/> : <FaChevronDown/>}
            </a>
            <div className="collapse" id="reviewMenu">
                <Link to="/reviewList" className="list-group-item ms-3"><FaList/> List</Link>
                <Link to="/createReview" className="list-group-item ms-3"><FaPlus/> Create</Link>
            </div>
        </div>
    )
}

export default MenuLeft