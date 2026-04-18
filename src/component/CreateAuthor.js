import { useState, useEffect } from "react";
import axios from "axios"

function CreateAuthor() {
    const [author, setAuthor] = useState("") 

    function handleCreate() {
        axios.post("http://localhost:8000/api/authors", {
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
            <label>Name</label>
            <input onChange={handleAuthorInput} style={{marginLeft: 5}} />
            <br />
            {author === "" ? <span style={{ marginLeft: 45, color: "red" }}>Please enter your name!</span> : null}

            {author !== "" ? <button onClick={handleCreate} style={{marginLeft: 50, marginTop: 10}} 
            className="btn btn-secondary">
                Create
            </button> : null}
        </div>
    )
}

export default CreateAuthor