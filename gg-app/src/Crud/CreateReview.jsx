import React from "react"
import axios from "axios"
import { useState } from "react"
import {auth} from '../utils/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import ReactStars from 'react-stars'


export default function CreateReview({ gameDetail }) {

const [user] = useAuthState(auth)

let newRating = 0;

const ratingChanged = (rating) => {
    newRating = rating;
    console.log(newRating)
}

const [body, setBody] = useState({
    gameDetail_id: gameDetail.id,
    name: `${user.displayName}`,
    photo: "https://imgur.com/LsLS8Gv.jpg",
    body: "",
    rating: newRating,
    user: `${user.displayName}`,
    game: `http://localhost:8000/games/${gameDetail.id}`
})


const handleChange = (e) => {
    setBody({ ...body, [e.target.id]: e.target.value })
}


const handleSubmit = async (event) => {
    event.preventDefault()
    await axios
    .post(`http://localhost:8000/reviewspost/`, {
        ...body,
        rating: newRating
    })
    .then((res) => {
    })
    window.location.reload();
}

return (
    <div className=" flex justify-center">
        <div className=" relative my-4 h-44 w-5/6 review-bg rounded-xl">
            <form className=" " onSubmit={handleSubmit}>
            <ReactStars
                className=" flex justify-end mr-3 mt-3"
                count={5}
                size={24}
                onChange={ratingChanged}
                value={newRating}
                color2={'#ffd700'} />
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
