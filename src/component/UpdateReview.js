import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import Errors from "./Errors"

function UpdateReview() {
    const { id } = useParams()
    
    const [reviewContent, setReviewContent] = useState("")
    const [error, setError] = useState("")

    useEffect(() => {
        if(reviewContent === "") {
            setError("Please enter your review!")
        } else setError("")
    }, [reviewContent])

    function handleInputContent(e) {
        setReviewContent(e.target.value)
    }

    function handleUpdate() {
        axios.patch(`https://java.huynguyen1725.com/api/reviews/${id}`, {
            content: reviewContent
        })
        .then(res => alert("Successfully updated"))
        .catch(err => console.log(err))
    }

    return (
        <div style={{ marginTop: 10}}>
            <div>
                <label>Update review</label>
                <input onChange={handleInputContent} style={{ marginLeft: 5}} />
                {reviewContent !== "" ? 
                <button onClick={handleUpdate} style={{marginLeft: 5}} className="btn btn-secondary">Update</button> :
                null}   
            </div>
            {error !== "" ? <div style={{ marginLeft: 105}}><Errors prop={error}/></div> : null}
        </div>
    )
}

export default UpdateReview