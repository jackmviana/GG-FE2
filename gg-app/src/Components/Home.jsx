import { useState, useEffect } from "react"
import axios from "axios"
import ReactStars from 'react-stars'
import React from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Kratos from "../Assets/Kratos.webp"
import GOW from "../Assets/GOW.webp"
import { Spinner } from "flowbite-react"


export default function Home() {

    const [game, setGame] = useState(null)
    let navigate = useNavigate()
    const showGame = (gamer) => {
        navigate(`/games/${gamer.id}`)
    }

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get("http://localhost:8000/games/")
            console.log(response.data[0])
            setGame(response.data) 
        }
        
        getData()
    
    }, [])

    if (!game) {
        return <div className=' detail-bg h-screen'><div className=' detail-bg'><Spinner
        className=' mt-4'
        size="xl"
        color="failure"
        aria-label="Failure spinner example"
        /></div></div>
    } else {
        return (
        <div className=" flex home-div">
            <script src="../path/to/flowbite/dist/flowbite.js"></script>
            <aside className=" w-20 md:w-64" aria-label="Sidebar">
            <div className=" py-4 px-3 rounded h-screen nav-bg">
                <ul className="space-y-5">
                    <li className=" md:text-2xl cursor-default font-bold">
                        Popular
                    </li>
                    <li className=" align-middle">
                        <Link path="/" className=" flex justify-center gap-2 p-2 font-light text-xs md:text-xl">
                        <svg className=" w-2 h-3 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
                        Featured
                        </Link>
                    </li>
                    <li className=" font-light text-xs md:text-xl cursor-default">New Release</li>
                    <li className=" font-light text-xs md:text-xl cursor-default">GOTY Games</li>
                    <li className=" font-light text-xs md:text-xl cursor-default">5-Stars</li>
                </ul>
                <ul className="space-y-5">
                    <li className=" mt-10 md:text-2xl cursor-default font-bold">Genre</li>
                    <li className=" font-light text-xs md:text-xl cursor-default">FPS</li>
                    <li className=" font-light text-xs md:text-xl cursor-default">Action</li>
                    <li className=" font-light text-xs md:text-xl cursor-default">RPG</li>
                    <li className=" font-light text-xs md:text-xl cursor-default">Strategy</li>
                </ul>
                <div className=" relative flex justify-center">
                    <div className=" invisible md:visible mt-10 h-36 w-36 rounded-2xl game-header-card-bg">
                        <p className=" mt-2 text-sm">Played it?</p>
                        <p className=" text-xl font-semibold">Review it</p>
                        <img className=" absolute bottom-0 right-10 w-28" src={Kratos} alt="" />
                    </div>
                </div>
            </div>
            </aside>

            <div className=" overflow-y-scroll h-screen w-full home-bg">
                <div className=" flex justify-center">
                    <div className=" mt-10 relative w-11/12 h-40 md:h-48 rounded-3xl game-header-card-bg">
                        <div className=" absolute flex flex-col gap-3 md:gap-2 left-6 md:left-12 bottom-10 md:bottom-12">
                            <p className=" text-xs md:text-xl font-light">The year's over</p>
                            <p className=" text-xs md:text-2xl font-medium">Here's the best</p>
                            <p className=" text-xs md:text-2xl font-medium">titles of 2022</p>
                        </div>
                        <div className=" absolute bottom-24 right-1 md:bottom-16 md:right-60">
                            <img className=" w-44 md:w-96 gow" src={GOW} alt="" />
                        </div>
                        <div className=" absolute bottom-4 md:bottom-0 right-4 md:right-8">
                            <img className=" h-28 md:h-52 kratos" src={Kratos} alt="" />
                        </div>
                    </div>
                </div>
                <div className=" game-card-grid grid sm:grid-cols-1 md:grid-cols-3 gap-y-10 justify-items-center mt-8 mb-10">
                {game.map((games) => (
                <div className=" relative transition-all ease-in-out">
                    <div style ={{backgroundColor: `${games.color}`}} className=" h-40 w-60 md:w-80 md:h-60 bg-gray-800 grid rounded-3xl overflow-hidden game-card" onClick={() => showGame(games)}>
                        <div className=" w-60 h-28 md:w-80 md:h-40 rounded-t-xl " style ={{backgroundImage: `url(${games.photo})`, backgroundSize: 'cover'}}>
                        </div>
                        <div className="">
                            <p className=" text-center text-xs font-semibold md:font-normal md:text-xl text-gray-200 game-title">{games.title}</p>
                            <ReactStars
                                className=" flex justify-center"
                                value={games.star_rating}
                                edit={false}
                                size={'20px'}
                                color2={'#ffd700'} />
                        </div>
                    </div>
                    <div className=" absolute top-0 video-div">
                        <iframe className=" w-60 h-28 md:w-80 md:h-40 rounded-t-3xl" src={games.video} title={games.video_title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                ))}
                
                </div>
            </div>
        </div>
    )}
}
