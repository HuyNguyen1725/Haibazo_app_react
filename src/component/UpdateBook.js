import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import Errors from "./Errors"

function UpdateBook() {
    const { id } = useParams()
    
    const [bookTitle, setBookTitle] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        if(bookTitle === "") {
            setError("Please enter book title!")
        } else setError("")
    }, [bookTitle])

    function handleInputName(e) {
        setBookTitle(e.target.value)
    }

    function handleUpdate() {
        axios.patch(`https://java.huynguyen1725.com/api/books/${id}`, {
            title: bookTitle
        })
        .then(res => alert("Successfully updated"))
        .catch(err => console.log(err))
    }

    return (
        <div className="mt-3">
            <div>
            <label>Update book</label>
            <input onChange={handleInputName} style={{ marginLeft: 5}} />
            {bookTitle !== "" ? 
            <button onClick={handleUpdate} style={{marginLeft: 5}} className="btn btn-secondary">Update</button> :
            null}
            </div>
            {error !== "" ? <div style={{ marginLeft: 105}}><Errors prop={error}/></div> : null}
        </div>
    )
}

export default UpdateBook