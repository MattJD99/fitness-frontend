import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Home from "./components/Home"
import ExerciseForm from "./components/ExerciseForm"
import ExerciseCard from "./components/ExerciseCard"
import ExercisesContainer from "./containers/ExercisesContainer"
import UserProfile from "./components/UserProfile"

function App() {
  return (
    <div className="App">

      <BrowserRouter >

      <Navbar />

      <Header slogan="Get Fit!" storename="Placeholder"/>

        <Switch >

        <Route path="/exercises/new">
            <ExerciseForm />
          </Route>

          <Route path="/exercises/:id">
            <ExerciseCard />
          </Route>

          <Route path="/exercises">
            <ExercisesContainer />
          </Route>
          
          <Route path="/profile">
            <UserProfile />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>

        </Switch >

      </BrowserRouter >

    </div>
  ); 
}

export default App;
