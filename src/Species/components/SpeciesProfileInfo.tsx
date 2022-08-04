import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {allAPI, TypeEnum} from "../../Api/Api";
import styled from "styled-components";


type SpeciesProfileInfoProps = {}

type SpecieProfile = {
    name: string
    classification: string
    hair_colors: string
    average_height: number
}

export const SpeciesProfileInfo: React.FC<SpeciesProfileInfoProps> = ({}) => {
    const params = useParams()
    const {id} = params
    const [speciesProfile, setSpeciesProfile] = useState<SpecieProfile | null>(null)

    useEffect(() => {
        id && allAPI.getInfo(id, TypeEnum.Species)
            .then(res => {
                setSpeciesProfile(res)
            })
    }, [])
    return (
        <Container>
            <TextNames>
                <StyledSpan>Name:</StyledSpan><span>{speciesProfile?.name}</span>
            </TextNames>
            <TextNames>
                <StyledSpan>Classification:</StyledSpan><span>{speciesProfile?.classification}</span>
            </TextNames>
            <TextNames>
                <StyledSpan>Hair colors:</StyledSpan><span>{speciesProfile?.hair_colors}</span>
            </TextNames>
            <TextNames>
                <StyledSpan>Average Height:</StyledSpan><span>{speciesProfile?.average_height}</span>
            </TextNames>
        </Container>)
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