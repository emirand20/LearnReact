import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="header">
            <tr>
                <th>
                    <Link to='/'>Home</Link>
                </th>
                <th>
                    <Link to='/aplicacion'>Aplicación</Link>
                </th>
                <th>
                    <Link to='/botons'>Butons</Link>
                </th>  
                <th>
                    <Link to='/changeColor'>Change Color</Link>
                </th>
                <th>
                    <Link to='/showHide'>ShowHide</Link>
                </th>
                <th>
                    <Link to='/toDo'>To Do</Link>
                </th>
            </tr>
        </div>
    )
}

export default NavBar;