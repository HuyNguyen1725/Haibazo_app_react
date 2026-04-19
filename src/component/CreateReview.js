import { useState, useEffect } from "react";
import axios from 'axios'
import Errors from "./Errors";

function CreateReview() {
    const [books, setBooks] = useState([]) 
    const [authors, setAuthors] = useState([])
    const [authorChoice, setAuthorChoice] = useState("")
    const [bookChoice, setBookChoice] = useState("")
    const [review, setReview] = useState("")
    const [page, setPage] = useState(0)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        axios.get("https://java.huynguyen1725.com/api/authors", {
            params: {page: page, size: 10}
        })
        .then(res => {
            setAuthors(res.data.content)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get("https://java.huynguyen1725.com/api/books", {
            params: {page: page, size: 10}
        })
        .then(res => {
            setBooks(res.data.content)
        })
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        const errors = {}
        if(review === "") {
            errors.review = "Please enter your review!"
        } 
        if(bookChoice === "") {
            errors.book = "Please select a book to review!"
        } 
        if(authorChoice === "") {
            errors.author = "Please select who you are!"
        }
        setErrors(errors)
    }, [review, bookChoice, authorChoice])


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
        axios.post(`https://java.huynguyen1725.com/api/reviews?authorId=${authorChoice}&bookId=${bookChoice}`, {
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
            <div>
                <label>Review</label>
                <input onChange={handleReviewInput} style={{marginLeft: 5}} />
                {Object.keys(errors).length === 0 ? <button onClick={handleCreate} style={{marginLeft: 5 }} 
                className="btn btn-secondary">
                    Create
                </button> : null}
            </div>
            {errors.review !== undefined ? <div style={{ marginLeft: 60}}><Errors prop={errors.review}/></div> : null}
            <select className="form-select"
             onChange={handleAuthorChoice} 
             value={authorChoice}
             style={{ width: 150, marginLeft: 56, marginTop: 10}}
             >
                <option value={""}>Author</option>
                {authorOption()}
            </select>
            {errors.author !== undefined ? <div style={{ marginLeft: 60}}><Errors prop={errors.author}/></div> : null}
            <select className="form-select"
             onChange={handleBookChoice} 
             value={bookChoice}
             style={{ width: 150, marginLeft: 56, marginTop: 10}}
             >
                <option value={""}>Book</option>
                {bookOption()}
            </select>
            {errors.book !== undefined ? <div style={{ marginLeft: 60}}><Errors prop={errors.book}/></div> : null}
        
        </div>
    )
}

export default CreateReview