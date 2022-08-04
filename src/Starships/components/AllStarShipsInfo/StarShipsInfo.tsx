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
        <Container>
            <TextNames>
                <StyledSpan>Name:</StyledSpan><span>{shipInfo?.name}</span>
            </TextNames>
            <TextNames>
                <StyledSpan>Crew:</StyledSpan><span>{shipInfo?.crew}</span>
            </TextNames>
            <TextNames>
                <StyledSpan>Length:</StyledSpan><span>{shipInfo?.length}</span>
            </TextNames>

        </Container>
    )
}

const Container = styled.div`
  background-color: white;
  border-radius: 50px;
  cursor: pointer;
`
const TextNames = styled.li`
  font-size: 75px;
  
`
const StyledSpan=styled.span`
  color:red;
`