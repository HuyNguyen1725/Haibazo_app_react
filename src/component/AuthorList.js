import { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
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
        <div className="mt-3">
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
                                <a className="btn btn-secondary btn-sm" href={`/updateAuthor/${usr.id}`}>Update</a>
                                <button className="btn btn-secondary btn-sm" 
                                style={{marginLeft: 5}} id={usr.id} onClick={handleDeleteAuthor}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button className="border-0 bg-transparent" style={{ cursor: "pointer", fontSize:20 }} disabled={page === 0} onClick={handlePrev}><FaArrowAltCircleLeft/></button>
            <span>Page {page + 1} / {totalPages}</span>
            <button className="border-0 bg-transparent" style={{ cursor: "pointer", fontSize:20 }} disabled={page + 1 >= totalPages} onClick={handleNext}><FaArrowAltCircleRight/></button>
        </div>
    )
}

export default AuthorList