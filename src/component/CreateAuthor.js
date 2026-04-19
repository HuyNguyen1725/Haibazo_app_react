import { useState, useEffect } from "react";
import axios from "axios"
import Errors from "./Errors";

function CreateAuthor() {
    const [author, setAuthor] = useState("") 
    const [error, setError] = useState("")

    useEffect(() => {
        if(author === "") {
            setError("Please enter your name!")
        } else setError("")
    }, [author])

    function handleCreate() {
        axios.post("https://java.huynguyen1725.com/api/authors", {
            name: author
        })
        .then(res => {
            alert("Successfully created")
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    function handleAuthorInput(e) {
        setAuthor(e.target.value)
    }

    return (
        <div style={{marginTop: 10}}>
            <div>
                <label>Name</label>
                <input onChange={handleAuthorInput} style={{marginLeft: 5}} />
                {author !== "" ? <button onClick={handleCreate} style={{marginLeft: 5 }} 
                className="btn btn-secondary">
                    Create
                </button> : null}
            </div>
            {error !== "" ? <div style={{ marginLeft: 50 }}><Errors prop={error}/></div> : null}
        </div>
    )
}

export default CreateAuthor