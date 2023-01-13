import React from "react"
import axios from "axios"

export default function DeleteReview({review}) {

const handleSubmit = async (event) => {
    event.preventDefault()

    await axios
        .delete(`https://gg-heroku.herokuapp.com/reviewsdelete/${review}`)
    window.location.reload();
}


return (
    <div className=" relative">
        <form onSubmit={handleSubmit}>
        <button
        className=" absolute text-red-500 text-xs -bottom-40 right-4 md:right-4 font-semibold"
        type="submit"
        >
        DELETE
        </button>
    </form>
    </div>
)
}
