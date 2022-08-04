import React from 'react';
import {NavLink, useLocation} from "react-router-dom";

const NavBar = () => {
    const {pathname} = useLocation()
    return (
        <div>
            {pathname!=='/home' &&<button>
                <NavLink to='/home'>Home</NavLink>
            </button>}
            <NavLink to='/films'/>
            <NavLink to='/films/:id'/>
            <NavLink to= '/starships'/>
            <NavLink to= '/planets'/>

        </div>
    );

}

export default NavBar;