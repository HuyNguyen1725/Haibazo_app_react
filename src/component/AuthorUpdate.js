import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

function AuthorUpdate() {
    const { id } = useParams()
    
    const [name, setName] = useState("")

    function handleInputName(e) {
        setName(e.target.value)
    }

    function handleUpdate() {
        axios.patch(`https://java.huynguyen1725.com/api/authors/${id}`, {
            name: name
        })
        .then(res => alert("Successfully updated"))
        .catch(err => console.log(err))
    }

    return (
        <div style={{ marginTop: 10}}>
            <label>Update</label>
            <input onChange={handleInputName} style={{ marginLeft: 5}} />
            {name !== "" ? 
            <button onClick={handleUpdate} style={{marginLeft: 5}} className="btn btn-secondary">Update</button> :
            null}
        </div>
    )
}

export default AuthorUpdate