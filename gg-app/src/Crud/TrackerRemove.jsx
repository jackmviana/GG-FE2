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

    // make a copy of the tracker object
    const updatedTracker = { ...tracker };
    // update the track attribute of the copy
    updatedTracker.track = track;
    // pass the copy to the axios.put method as the second argument
    await axios.put(`http://localhost:8000/trackerupdate/${tracker.id}`, updatedTracker);

    console.log(tracker.id)
    console.log(tracker.track)
  }


  return (
    <div>
      
        <button onClick={handleSubmit} className=" text-2xl font-light bg-transparent">
          x
        </button>
      
    </div>
  );
}