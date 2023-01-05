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

    const updatedTracker = { ...tracker };

    updatedTracker.track = track;

    await axios.put(`http://localhost:8000/trackerupdate/${tracker.id}`, updatedTracker);

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
