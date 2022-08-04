import React from "react";
import {AppProps} from "../../App";
import styled from "styled-components";
import {ShortCard, Wrapper} from "../../People/users/ShordCart";


type ListProps={
    planets:AppProps[]
    type:string
}




export const List :React.FC<ListProps>=({planets,type})=>{
    return(
        <WrapperDIV>
            {planets.map(planet=>{
                const id = planet.url.split('/')[5]
                return<ShortCard key={id} name={planet.name || ''}
                                 gender={planet.gender}
                                 user={planet.user} id={id}
                                 type={type}/>
            })}
        </WrapperDIV>

    )
}



export const WrapperDIV = styled.div`
      background-color: #fff;
      border: 1px solid #781045;
      border-radius: 5px;
      width: 300px;
      cursor: pointer;
    `
