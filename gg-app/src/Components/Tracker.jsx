import { useState, useEffect } from 'react';
import axios from 'axios';
import TrackerGameList from './TrackerGameList';
import TrackerRemove from '../Crud/TrackerRemove';
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Progress } from 'flowbite-react';
import { useNavigate } from 'react-router';

export default function Tracker() {

    const [game, setGame] = useState(null);
    const [isToggled, setIsToggled] = useState(false)
    const [animationParent] = useAutoAnimate({ duration: 200 })
    

let filteredGames;
    if (game) {
    filteredGames = game.filter(games => games.track === 'True');
}

let navigate = useNavigate()
    const showGame = (gamer) => {
        navigate(`/games/${gamer.id}`)
    }

    useEffect(() => {
        const getData = async () => {
        const response = await axios.get('https://gg-heroku.herokuapp.com/games/');
        setGame(response.data);
    };

    getData();
});


    return (
    <div className=' detail-bg h-screen'>
    <div className=' flex justify-center detail-bg'>
        <div ref={animationParent} className=' grid grid-cols-1 md:grid-cols-3 gap-10 p-4 transition-all ease-in-out'>
            <div className=" relative flex justify-center h-56 w-72 md:w-80 md:h-60 bg-gray-800 rounded-xl overflow-visible list-card">
            {isToggled && <TrackerGameList setIsToggled={setIsToggled} isToggled={isToggled}/>}
                <p className=' my-12 md:my-20 font-medium text-xl'>Track a Game</p>
                <button  onClick={() => setIsToggled(!isToggled)} className=" absolute -left-8 top-8 md:top-12 w-8 h-20 rounded-l-3xl bg-gray-800 text-4xl text-start toggle-button">+</button>
            </div>
            
            {filteredGames?.map(games => (
            <div key={games.title}  style ={{backgroundColor: `${games.color}`}}  className=" relative h-56 w-72 md:w-80 md:h-72 bg-gray-800 grid rounded-3xl overflow-hidden game-card">
                <div className=" w-72 h-28 md:w-80 md:h-40 rounded-t-xl " style ={{backgroundImage: `url(${games.photo})`, backgroundSize: 'cover'}}>
                </div>
                <div className=' h-1/4'>
                    <p  onClick={() => showGame(games)} className=" font-semibold text-center text-base md:text-xl text-gray-200 cursor-pointer game-title" key={games.title}>{games.title}</p>
                </div>
                <div className=' absolute right-4 top-2'>
                    <TrackerRemove tracker={games}/>
                </div>
                <div className=' relative h-48'>
                    <div className=' justify-center flex gap-5 my-1'>
                        <button className=' focus:text-green-300 bg-transparent'>
                            <p className=' text-sm md:text-base game-title'>Completed</p>
                        </button>
                        <button className='  focus:text-green-300 bg-transparent'>
                            <p className=' text-sm md:text-base  game-title'>Still Playing</p>
                        </button>
                    </div>
                    <div className=' flex justify-center mt-2'>
                        <Progress progress={games.progress}
                                    color="dark"
                                    size="md"
                                    label="Progress"
                                    labelPosition="outside"
                                    labelProgress={true}
                                    className=' w-48 md:w-64 shadow-lg shadow-black'/>
                    </div>
                </div>
            </div>
        ))}

        </div>
    </div>
    </div>
    );
}