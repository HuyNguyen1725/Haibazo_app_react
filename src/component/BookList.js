import { useState, useEffect } from "react";
import axios from 'axios'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

function BookList() {
    const [books, setBooks] = useState([])
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        axios.get("https://java.huynguyen1725.com/api/books", {
            params: {page: page, size: 2}
        })
        .then(res => {
            setBooks(res.data.content)
            console.log(res.data)
            setTotalPages(res.data.totalPages)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }, [page])

    function handleDeleteBook(e) {
        const id = Number(e.target.id)
        const newBooks = books.filter(u => u.id !== id)
        setBooks(newBooks)
        axios.delete(`https://java.huynguyen1725.com/api/books/${id}`)
        .then(res => alert("Successfully deleted book"))
        .catch(err => console.log(err))
    }

    function handlePrev() {
        setPage(page - 1)
    }
    function handleNext() {
        setPage(page + 1)
    }

    function handleSetPage(e) {
        setPage(Number(e.target.id) - 1)
    }

    function payLoad() {
        let buttons = []
        for(let i = 1; i <= totalPages; i++) {
            buttons.push(<button disabled={page === i - 1} id={i} onClick={handleSetPage} className="authorPaginate">{i}</button>)
        }
        return buttons
    }

    return (
        <div className="mt-3">
        <table className="table table-bordered table-striped text-center align-middlex" style={{ width: 700 }}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(bks => 
                        <tr>
                            <td>{bks.id}</td>
                            <td>{bks.title}</td>
                            <td>{bks.authorName}</td>
                            <td>
                                <a className="btn btn-secondary btn-sm" href={`/updateBook/${bks.id}`}>Update</a>
                                <button className="btn btn-secondary btn-sm" 
                                style={{marginLeft: 5}} id={bks.id} onClick={handleDeleteBook}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="d-flex">
                <button className="border-0 bg-transparent" style={{ cursor: "pointer", fontSize:20 }} disabled={page === 0} onClick={handlePrev}><FaArrowAltCircleLeft/></button>
                    {payLoad()}
                <button className="border-0 bg-transparent" style={{ cursor: "pointer", fontSize:20 }} disabled={page + 1 >= totalPages} onClick={handleNext}><FaArrowAltCircleRight/></button>
            </div>
        </div>
    )
}

export default BookList