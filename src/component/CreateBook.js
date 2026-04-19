import { useState, useEffect } from "react"
import axios from "axios"
import Errors from "./Errors"

function CreateBook() {
    const [title, setTitle] = useState("") 
    const [author, setAuthor] = useState([])
    const [authorChoice, setAuthorChoice] = useState("")
    const [page, setPage] = useState(0)
    const [errors, setErrors] = useState({})

    

    useEffect(() => {
        axios.get("https://java.huynguyen1725.com/api/authors", {
            params: {page: page, size: 10}
        })
        .then(res => {
            setAuthor(res.data.content)
        })
        .catch(err => console.log(err))
    }, [])

    
    useEffect(() => {
        const errors = {}
        if(title === "") {
            errors.title = "Please enter your book title!"
        }
        if(authorChoice === "") {
            errors.author = "Please select who you are!"
        }
        setErrors(errors)
    }, [title, authorChoice])

    function authorOption() {
        return author.map(ath => 
            <option key={ath.id} value={ath.id}>{ath.name}</option>
        )
    }

    function handleCreate() {
        axios.post(`https://java.huynguyen1725.com/api/books?authorId=${authorChoice}`, {
            title: title
        })
        .then(res => {
            alert("Successfully created")
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    function handleBookInput(e) {
        setTitle(e.target.value)
    }

    function handleAuthorChoice(e) {
        setAuthorChoice(e.target.value)
    }

    return (
        <div style={{marginTop: 10}}>
            <div>
                <label>Title</label>
                <input onChange={handleBookInput} style={{marginLeft: 5}} />
                {Object.keys(errors).length === 0 ? <button onClick={handleCreate} style={{marginLeft: 5 }} 
                className="btn btn-secondary">
                    Create
                </button> : null}
            </div>
            {errors.title !== undefined ? <div style={{ marginLeft: 30}}><Errors prop={errors.title}/></div> : null}
                <select className="form-select"
                onChange={handleAuthorChoice} 
                value={authorChoice}
                style={{ width: 150, marginLeft: 37, marginTop: 10}}
                >
                    <option value="">Author</option>
                    {authorOption()}
                </select>
            {errors.author !== undefined ? <div style={{ marginLeft: 30}}><Errors prop={errors.author}/></div> : null}
            
        </div>
    )
}

export default CreateBook