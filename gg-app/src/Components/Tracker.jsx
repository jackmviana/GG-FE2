// import TrackerAdd from "../Crud/TrackerAdd"
import { useState, useEffect } from 'react';
import axios from 'axios';
import TrackerGameList from './TrackerGameList';
import TrackerRemove from '../Crud/TrackerRemove';
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Tracker() {

    const [game, setGame] = useState(null);
    const [isToggled, setIsToggled] = useState(false)
    const [animationParent] = useAutoAnimate({ duration: 200 })

let filteredGames;
    if (game) {
    filteredGames = game.filter(games => games.track === 'True');
}

    useEffect(() => {
        const getData = async () => {
        const response = await axios.get('http://localhost:8000/games/');
        // console.log(response.data);
        setGame(response.data);
    };

    getData();
});

    return (
    <div className=' detail-bg h-screen'>
    <div className=' flex justify-center detail-bg'>
        <div ref={animationParent} className=' grid grid-cols-3 gap-10 p-4 transition-all ease-in-out'>
            <div className=" relative flex justify-center h-40 w-60 md:w-80 md:h-60 bg-gray-800 rounded-xl overflow-visible list-card">
            {isToggled && <TrackerGameList setIsToggled={setIsToggled} isToggled={isToggled}/>}
                <p className=' my-20 font-medium text-xl'>Track a Game</p>
                <button  onClick={() => setIsToggled(!isToggled)} className=" absolute -left-8 top-12 w-8 h-20 rounded-l-3xl bg-gray-800 text-4xl text-start toggle-button">+</button>
            </div>
            
            {filteredGames?.map(games => (
            <div key={games.title} className=" relative flex justify-center h-40 w-60 md:w-80 md:h-60 bg-gray-800 rounded-xl overflow-hidden hover:h-96 game-card">
            <p key={games.title}>{games.title}</p>
            <div className=' absolute right-4 top-2'>
                <TrackerRemove tracker={games}/>
            </div>
            </div>
        ))}

        </div>
    </div>
    </div>
    );
}