import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {allAPI, TypeEnum} from "../../../Api/Api";


type ProfileInfoProps = {}

type ShipProfile = {
    name: string
    crew: number
    length: number


}

export const StarShipsInfo: React.FC<ProfileInfoProps> = ({}) => {
    const params = useParams()
    const {id} = params
    const [shipInfo, setShipInfo] = useState<ShipProfile | null>(null)

    useEffect(() => {
        id && allAPI.getInfo(id, TypeEnum.Starships)
            .then(res => {
                setShipInfo(res)
            })
    }, [])


    return (
        <div>
            <ShipInfo>
                {shipInfo?.name}
            </ShipInfo>

            <ShipInfo>

                {shipInfo?.crew}
            </ShipInfo>

            <ShipInfo>
                {shipInfo?.length}
            </ShipInfo>
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
