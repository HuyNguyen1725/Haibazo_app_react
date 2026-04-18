import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'

function UpdateBook() {
    const { id } = useParams()
    
    const [bookTitle, setBookTitle] = useState("")

    function handleInputName(e) {
        setBookTitle(e.target.value)
    }

    function handleUpdate() {
        axios.patch(`http://localhost:8000/api/books/${id}`, {
            title: bookTitle
        })
        .then(res => alert("Successfully updated"))
        .catch(err => console.log(err))
    }

    return (
        <div style={{ marginTop: 10}}>
            <label>Update book</label>
            <input onChange={handleInputName} style={{ marginLeft: 5}} />
            {bookTitle !== "" ? 
            <button onClick={handleUpdate} style={{marginLeft: 5}} className="btn btn-secondary">Update</button> :
            null}
        </div>
    )
}

export default UpdateBook