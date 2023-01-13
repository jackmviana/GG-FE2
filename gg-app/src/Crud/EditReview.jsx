import React from "react"
import axios from "axios"
import { useState } from "react"

export default function EditReview({
review,
setIsToggledEdit,
isToggledEdit,
}) {
    const [body, setBody] = useState({
    body: review.body,
})

const handleChange = (e) => {
    setBody({ ...body, [e.target.id]: e.target.value })
}

const handleSubmit = async (event) => {
    event.preventDefault()
    setIsToggledEdit(!isToggledEdit)

    await axios
    .put(`https://gg-heroku.herokuapp.com/reviewsupdate/${review.id}`, body)
    window.location.reload();
}

return (
    <div className=" flex justify-center">
        <div className=" absolute bottom-8 h-28 w-full bg-transparent rounded-xl">
        <form onSubmit={handleSubmit}>
            <textarea
            className=" absolute bottom-0 left-12 h-24 w-4/6 review-bg rounded-xl"
            id="body"
            name="body"
            type="text"
            placeholder={review.body}
            autoComplete="off"
            onChange={handleChange}
            value={body.body}
            ></textarea>
            <button
            className=" absolute -bottom-4 right-24 text-xs md:right-28 font-semibold"
            type="submit"
            >
            SUBMIT
            </button>
        </form>
        </div>
    </div>
)
}