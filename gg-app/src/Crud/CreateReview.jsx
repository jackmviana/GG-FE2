import React from "react"
import axios from "axios"
import { useState } from "react"

export default function CreateReview({ gameDetail }) {
const [body, setBody] = useState({
    gameDetail_id: gameDetail.id,
    name: "name",
    photo: "https://imgur.com/LsLS8Gv.jpg",
    body: "gg",
})

const handleChange = (e) => {
    setBody({ ...body, [e.target.id]: e.target.value })
}

const handleSubmit = async (event) => {
    event.preventDefault()
    await axios
    .post(`http://localhost:8000/reviewspost/`, body)
    .then((res) => {
    })
    
}

return (
    <div className=" flex justify-center">
        <div className=" relative my-4 h-44 w-5/6 review-bg rounded-xl">
            <form onSubmit={handleSubmit}>
            <input
                className=" absolute bottom-8 left-12 h-24 w-4/6 review-bg rounded-xl"
                id="body"
                type="text"
                autoComplete="off"
                onChange={handleChange}
                value={body[""]}
            />
            <button
                className=" absolute bottom-4 right-4 text-sm md:right-4 md:text-base font-semibold"
                type="submit"
            >
            Post
            </button>
            </form>
        </div>
    </div>
)
}
