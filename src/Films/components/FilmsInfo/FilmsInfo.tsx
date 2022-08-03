import React from "react";
import {AppProps} from "../../../App";
import {ShortCard} from "../../../People/users/ShordCart";

type FilmsInfoProps = {
    filmsList:AppProps[]
    type: string
}

export const FilmsInfo:React.FC <FilmsInfoProps> = ({filmsList, type}) => {

    return (<div>
        {filmsList.map(film => {
            const id = film.url.split('/')[5]
            return <ShortCard type={type} id={id} key={id} name={film.title} gender={film.director}
                            user={film.producer}/>})}
    </div>)
}
