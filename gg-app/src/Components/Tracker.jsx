import userEvent from "@testing-library/user-event"
import GameDetails from "./GameDetails"

export default function Tracker() {

    return (
        <div className=" detail-bg h-96">
            
            <div className=" flex justify-center h-40 w-60 md:w-80 md:h-60 bg-gray-800 rounded-xl overflow-hidden game-card">
                <button className=" mt-20 h-20 w-20 rounded-full text-5xl font-light bg-neutral-700 text-neutral-300">+</button>
                    
            </div>
                
            
        </div>
    )
}


// onclick that shows a mapped list of game titles.
// create component w axios get. set data in state(null). render data on screen. 
// onclick takes id of game, pushes game into an array owned by user.
// renders out a map of users owned games.
// event.target.value/id , run another axios call to get users* /id route. 
// post to user or game route || window.location.reload() pull data 