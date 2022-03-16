import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import YoutubeEmbed from "./YoutubeEmbed";

function ExerciseCard({exercise}) {
    const {id} = useParams()
    const [exerciseObj, setexerciseObj] = useState(null);
    useEffect(() => {   
        if (!exercise) {
            fetch(`http://localhost:9393/exercises/${id}`)
            .then(resp => resp.json())
            .then(exercise => setexerciseObj(exercise))
        }
    }, [exercise, id]);

    const finalexercise = exercise ? exercise : exerciseObj
    if (!finalexercise) return <h1>Loading...</h1>
  return (
    <div>
        <h3>Name: <Link to={`/exercises/${finalexercise.id}`}>{finalexercise.exercise_name}</Link></h3>
        <h4>description: {finalexercise.description}</h4>
        <h4>Video: <YoutubeEmbed embedId={finalexercise.video_link}></YoutubeEmbed> </h4>
        {/* <h4>Watering Frequency: {finalexercise.watering_freq} (days/week)</h4>
        <h4>Uploaded by: {finalexercise.user?.username || "No creator!"}</h4> */}
    </div>
  )
}

export default ExerciseCard;