import { useState, useEffect } from "react";
import axios from 'axios'

function ReviewList() {
    const [reviews, setReviews] = useState([])
    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        axios.get("https://java.huynguyen1725.com/api/reviews", {
            params: {page: page, size: 10}
        })
        .then(res => {
            setReviews(res.data.content)
            console.log(res.data)
            setTotalPages(res.data.totalPages)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    function handleDeleteReview(e) {
        const id = Number(e.target.id)
        const newReviews = reviews.filter(u => u.id !== id)
        setReviews(newReviews)
        axios.delete(`https://java.huynguyen1725.com/api/reviews/${id}`)
        .then(res => alert("Successfully deleted review"))
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
                        <th>Book</th>
                        <th>Author</th>
                        <th>Review</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {reviews.map(rv => 
                        <tr>
                            <td>{rv.id}</td>
                            <td>{rv.bookTitle}</td>
                            <td>{rv.authorName}</td>
                            <td>{rv.content}</td>
                            <td>
                                <a className="btn btn-secondary" href={`/updateReview/${rv.id}`}>Update</a>
                                <button className="btn btn-secondary" 
                                style={{marginLeft: 5}} id={rv.id} onClick={handleDeleteReview}>Delete</button>
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

export default ReviewList