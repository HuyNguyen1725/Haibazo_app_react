import { useState, useEffect } from "react";
import axios from "axios"

function AuthorList() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        axios.get("https://java.huynguyen1725.com/api/authors", {
            params: {page: page, size: 10}
        })
        .then(res => {
            setUsers(res.data.content)
            setTotalPages(res.data.totalPages)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    function handleDeleteAuthor(e) {
        const id = Number(e.target.id)
        const newUsers = users.filter(u => u.id !== id)
        setUsers(newUsers)
        axios.delete(`https://java.huynguyen1725.com/api/authors/${id}`)
        .then(res => alert("Successfully deleted author"))
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
            <table className="table table-bordered table-striped text-center align-middle" style={{ width: 700}}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Books</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(usr => 
                        <tr>
                            <td>{usr.id}</td>
                            <td>{usr.name}</td>
                            <td>{usr.bookQty}</td>
                            <td>
                                <a className="btn btn-secondary" href={`/updateAuthor/${usr.id}`}>Update</a>
                                <button className="btn btn-secondary" 
                                style={{marginLeft: 5}} id={usr.id} onClick={handleDeleteAuthor}>Delete</button>
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

export default AuthorList