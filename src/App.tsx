import React from 'react';
import {Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import {AllDataInfo} from "./components/DataCard/DataCardInfo";
import {HomePage} from "./components/HomePage/HomePage";
import {PageFilms} from "./Films/components/HomePageFilms/PageFilms";
import {PeopleList} from "./People/components/PeopleList";
import {StarShipsList} from "./Starships/components/StarShipsList";
import {PlanetsList} from "./Planets/PlanetsList";
import {Species} from "./Species/SpeciesList";


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
                <Route path='/home' element={<HomePage/>}/>
                <Route path='/people' element={<PeopleList/>}/>
                <Route path='/people/:id' element={<AllDataInfo/>}/>
                <Route path='/films' element={<PageFilms/>}/>
                <Route path='/films/:id' element={<AllDataInfo/>}/>
                <Route path='/starships' element={<StarShipsList/>}/>
                <Route path='/starships/:id' element={<AllDataInfo/>}/>
                <Route path='/species' element={<Species/>}/>
                <Route path='/species/:id' element={<AllDataInfo/>}/>
                <Route path='/planets' element={<PlanetsList/>}/>
                <Route path='/planets/:id' element={<AllDataInfo/>}/>
            </Routes>
        </div>
    );
};