import { useState } from "react"
import axios from "axios"

export default function TrackerAdd({ tracker, setIsToggledEdit, isToggledEdit }) {
  const [track, setTrack] = useState("True");

  const setTrackToTrue = () => {
    setTrack("True");
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

    // update isToggledEdit after the tracker object has been successfully updated
    setIsToggledEdit(!isToggledEdit);
    console.log(tracker.id)
    console.log(tracker.track)
  }


  return (
    <div>
      
        <button onClick={handleSubmit} className="h-8 w-12 rounded-lg text-base font-semibold bg-emerald-600">
          Add
        </button>
      
    </div>
  );
}
