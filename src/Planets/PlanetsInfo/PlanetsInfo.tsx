import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {allAPI, TypeEnum} from "../../Api/Api";
import styled from "styled-components";

type PlanetsInfoProps={}

type PlanetInfo ={
    name:string
    rotation_period:number
    orbital_period:number
    diameter:number
    climate:string
}

export const PlanetsCard:React.FC<PlanetsInfoProps>=({})=>{
    const params =useParams()
    const{id} = params
    const[planetIfo,setPlanetInfo] = useState<PlanetInfo | null>(null)

    useEffect(()=>{
        id && allAPI.getInfo(id,TypeEnum.Planets)
            .then(res=>{
                setPlanetInfo(res)
            })
    },[])


    return(
        <div>
            <ShipInfo>{planetIfo?.name}</ShipInfo>
            <ShipInfo>{planetIfo?.rotation_period}</ShipInfo>
            <ShipInfo>{planetIfo?.orbital_period}</ShipInfo>
            <ShipInfo>{planetIfo?.diameter}</ShipInfo>
            <ShipInfo>{planetIfo?.climate}</ShipInfo>

        </div>
    )
}

const ShipInfo = styled.div`
  background-color: white;
  border: 2px solid gray;
  border-radius: 10px;
  width: 250px;
  cursor: pointer;


  :hover {
    border-color: wheat;
  }
`
