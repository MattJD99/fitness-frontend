import {useState} from "react"
import {useHistory} from "react-router-dom"

const ExerciseForm = () => {
    const [Exercise, setExercise] = useState({
        name: "",
        species: "",
        sunExposure: "",
        wateringFreq: ""
    });
    const history = useHistory()

    const handleChange = (e) => {
        setExercise({
            ...Exercise,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        // if ([Exercise.name, Exercise.species, Exercise.sunExposure, Exercise.wateringFreq].some(val => val.trim() === "")) {
        if ([Exercise.name].some(val => val.trim() === "")) {

            alert("You must fill in all the information please!")
        }

        const newExercise = {
            name: Exercise.name,
            // species: Exercise.video_link,
            // user_id: self.id,
            // watering_freq: Exercise.wateringFreq
        }

        fetch("http://http://127.0.0.1:9393/exercises", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newExercise)
        })
        .then(() => history.push("/exercises"))
        
    }
    return (
        <>
            <h3>Create a new Exercise</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" name="name" value={Exercise.exercise_name} required/><br />
                {/* <label htmlFor="species">Species</label>
                <input onChange={handleChange} type="text" name="species" value={Exercise.species} required/><br />
                <label htmlFor="sunExposure">Sun Exposure (hrs/day)</label>
                <input onChange={handleChange} type="number" name="sunExposure" value={Exercise.sunExposure} required/><br />
                <label htmlFor="wateringFreq">Watering Frequency (days/week)</label>
                <input onChange={handleChange} type="number" name="wateringFreq" value={Exercise.wateringFreq} required/><br /> */}
                <input type="submit" value="Create Exercise" />
            </form>
        </>
    )
}

export default ExerciseForm;