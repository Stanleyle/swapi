import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {allAPI, TypeEnum} from "../../../Api/Api";

type ProfileInfoProps = {}

type UserProfile = {
    title: string
    director: string
    episode_id: number


}

export const FilmInfo: React.FC<ProfileInfoProps> = ({}) => {
    const params = useParams()
    const {id} = params
    const [oneFilmInfo, setOneFilmInfo] = useState<UserProfile | null>(null)

    useEffect(() => {
        id && allAPI.getInfo(id, TypeEnum.Films)
            .then(res => {
                setOneFilmInfo(res)
            })
    }, [])


    return (
        <Container>
            <TextNames>
                <StyledSpan>Title:</StyledSpan><span>{oneFilmInfo?.title}</span>
            </TextNames>
            <TextNames>
                <StyledSpan>Director:</StyledSpan><span>{oneFilmInfo?.director}</span>
            </TextNames>
            <TextNames>
                <StyledSpan>Episode:</StyledSpan><span>{oneFilmInfo?.episode_id}</span>
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