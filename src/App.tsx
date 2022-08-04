import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import {ProfileInfo} from "./People/users/UsersProfileInfo";
import {HomePage} from "./components/HomePage/HomePage";
import {PageFilms} from "./Films/components/HomePageFilms/PageFilms";
import {PeopleList} from "./People/components/PeopleList";
import {FilmInfo} from "./Films/components/OneFilmInfo/OneFilmInfo";
import {StarShipsInfo} from "./Starships/components/AllStarShipsInfo/StarShipsInfo";
import {StarShipsList} from "./Starships/components/StarShipsList";
import {PlanetsList} from "./Planets/PlanetsList";
import {PlanetsCard} from "./Planets/PlanetsInfo/PlanetsInfo";
import {Species} from "./Species/SpeciesList";
import {SpeciesProfileInfo} from "./Species/components/SpeciesProfileInfo";


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
                <Route path='/species' element={<Species/>}/>
                <Route path='/species/:id' element={<SpeciesProfileInfo/>}/>
                <Route path='/planets' element={<PlanetsList/>}/>
                <Route path='/planets/:id' element={<PlanetsCard/>}/>
            </Routes>
        </div>
    );
};