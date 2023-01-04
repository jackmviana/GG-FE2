import { useState, useEffect } from "react";
import axios from "axios";
import TrackerAdd from "../Crud/TrackerAdd";

export default function TrackerGameList () {

    const [gameList, setGameList] = useState(null)
    const [isToggledEdit, setIsToggledEdit] = useState(false)

    useEffect(() => {
        const getData = async () => {
        const response = await axios.get('http://localhost:8000/games/');
        console.log(response.data[0]);
        setGameList(response.data);
    };

    getData();
}, [])


    return (
        <div className=" absolute h-40 w-60 md:w-80 md:h-60 bg-gray-800 rounded-xl p-2 overflow-y-scroll game-card">           
            {gameList && gameList.map((gameLists) => (
            <div key={gameLists.title} className=" flex gap-1 my-4">
                <div className=" w-4/5">
                    <p className=" text-left">{gameLists.title}</p>
                </div>
                <div className=" w-1/5">
                    <TrackerAdd tracker={gameLists}
                                setIsToggledEdit={setIsToggledEdit} isToggledEdit={isToggledEdit}/>
                </div>
            </div>
            ))}
        </div>
    )
}