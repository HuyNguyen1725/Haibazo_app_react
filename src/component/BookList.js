import { useState, useEffect } from "react";
import axios from 'axios'

function BookList() {
    const [books, setBooks] = useState([])
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        axios.get("https://java.huynguyen1725.com/api/books", {
            params: {page: page, size: 10}
        })
        .then(res => {
            setBooks(res.data.content)
            console.log(res.data)
            setTotalPages(res.data.totalPages)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }, [])

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

    return (
        <div>
        <table className="table table-bordered table-striped text-center align-middle" style={{ width: 700 }}>
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
                                <a className="btn btn-secondary" href={`/updateBook/${bks.id}`}>Update</a>
                                <button className="btn btn-secondary" 
                                style={{marginLeft: 5}} id={bks.id} onClick={handleDeleteBook}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button disabled={page === 0} onClick={handlePrev}>Prev</button>
            <span>Page {page + 1} / {totalPages}</span>
            <button disabled={page + 1 >= totalPages} onClick={handleNext}>Next</button>
        </div>
    )
}

export default BookList