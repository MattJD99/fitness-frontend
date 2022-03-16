import ExerciseCard from "./ExerciseCard"

function ExercisesList ({exercise}) {
    const renderexercises = exercise.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise}/>)
    return (
        <div>{renderexercises}</div>
    )
}

export default ExercisesList;