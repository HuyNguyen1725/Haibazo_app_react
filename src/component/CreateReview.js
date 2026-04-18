import { useState, useEffect } from "react";
import axios from 'axios'

function CreateReview() {
    const [books, setBooks] = useState([]) 
    const [authors, setAuthors] = useState([])
    const [authorChoice, setAuthorChoice] = useState("")
    const [bookChoice, setBookChoice] = useState("")
    const [review, setReview] = useState("")
    const [page, setPage] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors", {
            params: {page: page, size: 10}
        })
        .then(res => {
            setAuthors(res.data.content)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8000/api/books", {
            params: {page: page, size: 10}
        })
        .then(res => {
            setBooks(res.data.content)
        })
        .catch(err => console.log(err))
    }, [])


    function authorOption() {
        return authors.map(ath => 
            <option key={ath.id} value={ath.id}>{ath.name}</option>
        )
    }
    console.log(books)
    function bookOption() {
        return books.map(bkks => 
            <option key={bkks.id} value={bkks.id}>{bkks.title}</option>
        )
    }
    console.log(bookChoice)
    console.log(authorChoice)

    function handleCreate() {
        axios.post(`http://localhost:8000/api/reviews?authorId=${authorChoice}&bookId=${bookChoice}`, {
            content: review
        })
        .then(res => {
            alert("Successfully created")
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    function handleReviewInput(e) {
        setReview(e.target.value)
    }

    function handleAuthorChoice(e) {
        setAuthorChoice(e.target.value)
    }
    function handleBookChoice(e) {
        setBookChoice(e.target.value)
    }

    return (
        <div style={{marginTop: 10}}>
            <label>Review</label>
            <input onChange={handleReviewInput} style={{marginLeft: 5}} />
            <br />
            {review === "" ? <span style={{ marginLeft: 45, color: "red" }}>Please enter your review!</span> : null}

            <select className="form-select"
             onChange={handleAuthorChoice} 
             value={authorChoice}
             style={{ width: 150, marginLeft: 37, marginTop: 10}}
             >
                <option value={""}>Author</option>
                {authorOption()}
            </select>

            <select className="form-select"
             onChange={handleBookChoice} 
             value={bookChoice}
             style={{ width: 150, marginLeft: 37, marginTop: 10}}
             >
                <option value={""}>Book</option>
                {bookOption()}
            </select>

            {review !== "" ? <button onClick={handleCreate} style={{marginLeft: 40, marginTop: 10}} 
            className="btn btn-secondary">
                Create
            </button> : null}
        </div>
    )
}

export default CreateReview