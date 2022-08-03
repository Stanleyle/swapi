import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import {ProfileInfo} from "./People/users/UsersProfileInfo";
import {HomePage} from "./components/HomePage/HomePage";
import {PageFilms} from "./Swapi/components/HomePageFilms/PageFilms";
import {PeopleList} from "./People/components/PeopleList";
import {FilmInfo} from "./Swapi/components/OneFilmInfo/OneFilmInfo";
import {StarShipsInfo} from "./Starships/components/AllStarShipsInfo/StarShipsInfo";
import {StarShipsList} from "./Starships/components/StarShipsList";


export type AppProps = {
    name: string
    url: string
    gender: string
    user: string
    title: string
    director: string
    producer: string
    type: string

}


export const App = () => {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path='/people' element={<PeopleList/>}/>
                <Route path='/people/:id' element={<ProfileInfo/>}/>
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/films' element={<PageFilms/>}/>
                <Route path='/films/:id' element={<FilmInfo/>}/>
                <Route path='/starships' element={<StarShipsList/>}/>
                <Route path='/starships/:id' element={<StarShipsInfo/>}/>
            </Routes>
        </div>
    );
};