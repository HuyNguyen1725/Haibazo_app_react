import { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Errors from "./Errors"

function AuthorUpdate() {
    const { id } = useParams()
    
    const [name, setName] = useState("")
    const [error, setError] = useState("")

    function handleInputName(e) {
        setName(e.target.value)
    }

    useEffect(() => {
        if(name === "") {
            setError("Please enter your name!")
        } else setError("")
    }, [error, name])

    function handleUpdate() {
        axios.patch(`https://java.huynguyen1725.com/api/authors/${id}`, {
            name: name
        })
        .then(res => alert("Successfully updated"))
        .catch(err => console.log(err))
    }

    return (
        <div style={{ marginTop: 10}}>
            <div>
                <label>Update</label>
                <input onChange={handleInputName} style={{ marginLeft: 5}} />
                {name !== "" ? 
                <button onClick={handleUpdate} style={{marginLeft: 5}} className="btn btn-secondary">Update</button> :
                null}
            </div>
            {error !== "" ? <div style={{ marginLeft: 60 }}><Errors prop={error}/></div> : null}
        </div>
    )
}

export default AuthorUpdate