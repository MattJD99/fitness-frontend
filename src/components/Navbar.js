import {NavLink} from 'react-router-dom'

const style = {
    width: "60%",
    margin: "5% 0 1%",
    padding: "1em",
    textDecoration: "none",
    color: "black",
    backgroundColor: "rgb(2555, 120, 44)",
    fontWeight: "bold",
    verticalAlign: "center"
}

function Navbar() {
    return (
        <div>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/"
            >Home</NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/exercises"
            >exercises</NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/exercises/new"
            >New Exercise</NavLink>
            <NavLink
            activeStyle={{
                fontWeight: "bolder",
                color: "red"
            }}
                exact
                style={style}
                to="/profile"
            >Profile</NavLink>
        </div>
    )
}

export default Navbar;