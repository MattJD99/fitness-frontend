import {useState, useEffect} from "react"
import ExercisesList from "../components/ExercisesList"

const ExercisesContainer = () => {
    const [exercise, setExercise] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("http://127.0.0.1:9393/exercises")
                const data = await resp.json()
                setExercise(data)
                setLoading(false)
            } catch (error) {
                alert(error)
            }
        }

        fetchData()
        
    }, []);

    if (!!loading) return <h1>Loading...</h1>

    return (
        <>
            <h2>Our Exercise</h2>
            <ExercisesList exercise={exercise} />
        </>
    )
}

export default ExercisesContainer;
