import React from "react";
import {AppProps} from "../../../App";
import {WrapperDIV} from "../../../People/users/List";
import {ShortCard} from "../../../People/users/ShordCart";

type AllStarShipsInfoProps ={
    starshipList:AppProps[]
    type:string

}


export const AllStarShipsInfo:React.FC<AllStarShipsInfoProps> = ({starshipList,type}) =>{
    return (
        <WrapperDIV>
        {starshipList.map((ship)=>{
            const id = ship.url.split('/')[5]
            return <ShortCard type={type} id={id} key={id} name={ship.name} gender={ship.gender}
                              user={ship.user}
            />
        })}

    </WrapperDIV>)
}