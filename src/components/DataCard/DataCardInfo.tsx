import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {allAPI, TypeEnum} from "../../Api/Api";
import styled from "styled-components";

type UserProfile = {
    name: string
    gender: string
    height: number
    title: string
    director: string
    episode_id: number
    rotation_period:number
    orbital_period:number
    diameter:number
    climate:string
    classification: string
    hair_colors: string
    average_height: number
    crew: number
    length: number


}

export const AllDataInfo: React.FC = () => {
    const location = useLocation()
    const [allData, setAllData] = useState<UserProfile | null>(null)
    const [newId, newType] = location.pathname.split('/').reverse()

    useEffect(() => {
        newId && allAPI.getInfo(newId,TypeEnum[newType as TypeEnum])
            .then(res => {
                setAllData(res)
            })
    }, [])

    return (
        <Container>

            {allData?.name && <TextNames>
                <StyledSpan>Name:</StyledSpan><span>{allData?.name}</span>
            </TextNames>}
            {allData?.gender && <TextNames>
                <StyledSpan>Gender:</StyledSpan><span>{allData?.gender}</span>
            </TextNames>}
            {allData?.height && <TextNames>
                <StyledSpan>Height:</StyledSpan><span>{allData?.height}</span>
            </TextNames>}
            {allData?.title && <TextNames>
                <StyledSpan>Title:</StyledSpan><span>{allData?.title}</span>
            </TextNames>}
            {allData?.director && <TextNames>
                <StyledSpan>Director:</StyledSpan><span>{allData?.director}</span>
            </TextNames>}
            {allData?.episode_id && <TextNames>
                <StyledSpan>Episode:</StyledSpan><span>{allData?.episode_id}</span>
            </TextNames>}
            {allData?.rotation_period && <TextNames>
                <StyledSpan>Rotation:</StyledSpan><span>{allData?.rotation_period}</span>
            </TextNames>}
            {allData?.orbital_period && <TextNames>
                <StyledSpan>Orbital:</StyledSpan><span>{allData?.orbital_period}</span>
            </TextNames>}
            {allData?.diameter && <TextNames>
                <StyledSpan>Diameter:</StyledSpan><span>{allData?.diameter}</span>
            </TextNames>}
            {allData?.climate && <TextNames>
                <StyledSpan>Climate:</StyledSpan><span>{allData?.climate}</span>
            </TextNames>}
            {allData?.hair_colors && <TextNames>
                <StyledSpan>Hair colors:</StyledSpan><span>{allData?.hair_colors}</span>
            </TextNames>}
            {allData?.crew && <TextNames>
                <StyledSpan>Crew:</StyledSpan><span>{allData?.crew}</span>
            </TextNames>}
            {allData?.length && <TextNames>
                <StyledSpan>Length:</StyledSpan><span>{allData?.length}</span>
            </TextNames>}
            {allData?.average_height && <TextNames>
                <StyledSpan>Average height:</StyledSpan><span>{allData?.average_height}</span>
            </TextNames>}
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