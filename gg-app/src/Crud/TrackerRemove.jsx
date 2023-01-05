import { useState } from "react"
import axios from "axios"

export default function TrackerRemove({ tracker }) {
  const [track, setTrack] = useState("False");

  const setTrackToTrue = () => {
    setTrack("False");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setTrackToTrue();


    const updatedTracker = { ...tracker };

    updatedTracker.track = track;

    await axios.put(`http://localhost:8000/trackerupdate/${tracker.id}`, updatedTracker);

    console.log(tracker.id)
    console.log(tracker.track)
  }


  return (
    <div>
      
        <button onClick={handleSubmit} style ={{color: `${tracker.color}`}} className=" text-3xl font-semibold bg-transparent">
          x
        </button>
      
    </div>
  );
}