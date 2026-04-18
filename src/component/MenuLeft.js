import { Link } from "react-router-dom"

function MenuLeft() {
    return (
        <div>
            <a className="list-group-item list-group-item-action"
                data-bs-toggle="collapse"
                href="#authorMenu"
            >
                Author
            </a>
            <div className="collapse" id="authorMenu">
                <Link to="/authorList" className="list-group-item ms-3">List</Link>
            </div>
            <div className="collapse" id="authorMenu">
                <Link to="/createAuthor" className="list-group-item ms-3">Create</Link>
            </div>


            <a className="list-group-item list-group-item-action"
                data-bs-toggle="collapse"
                href="#bookMenu"
            >
                Book
            </a>
            <div className="collapse" id="bookMenu">
                <Link to="/bookList" className="list-group-item ms-3">List</Link>
            </div>
            <div className="collapse" id="bookMenu">
                <Link to="/createBook" className="list-group-item ms-3">Create</Link>
            </div>


            <a className="list-group-item list-group-item-action"
                data-bs-toggle="collapse"
                href="#reviewMenu"
            >
                Review
            </a>
            <div className="collapse" id="reviewMenu">
                <Link to="/reviewList" className="list-group-item ms-3">List</Link>
            </div>
            <div className="collapse" id="reviewMenu">
                <Link to="/createReview" className="list-group-item ms-3">Create</Link>
            </div>
        </div>
    )
}

export default MenuLeft