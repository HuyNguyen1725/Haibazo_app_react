import { useState, useEffect } from "react"
import axios from "axios"

function CreateBook() {
    const [book, setBook] = useState("") 
    const [author, setAuthor] = useState([])
    const [authorChoice, setAuthorChoice] = useState("")
    const [page, setPage] = useState(0)

    console.log(authorChoice)

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors", {
            params: {page: page, size: 10}
        })
        .then(res => {
            setAuthor(res.data.content)
        })
        .catch(err => console.log(err))
    }, [])


    function authorOption() {
        return author.map(ath => 
            <option key={ath.id} value={ath.id}>{ath.name}</option>
        )
    }

    function handleCreate() {
        axios.post(`http://localhost:8000/api/books?authorId=${authorChoice}`, {
            title: book
        })
        .then(res => {
            alert("Successfully created")
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    function handleBookInput(e) {
        setBook(e.target.value)
    }

    function handleAuthorChoice(e) {
        setAuthorChoice(e.target.value)
    }

    return (
        <div style={{marginTop: 10}}>
            <label>Title</label>
            <input onChange={handleBookInput} style={{marginLeft: 5}} />
            <br />
            {book === "" ? <span style={{ marginLeft: 45, color: "red" }}>Please enter your book title!</span> : null}
            <select className="form-select"
             onChange={handleAuthorChoice} 
             value={authorChoice}
             style={{ width: 150, marginLeft: 37, marginTop: 10}}
             >
                {authorOption()}
            </select>
            {book !== "" ? <button onClick={handleCreate} style={{marginLeft: 40, marginTop: 10}} 
            className="btn btn-secondary">
                Create
            </button> : null}
        </div>
    )
}

export default CreateBook