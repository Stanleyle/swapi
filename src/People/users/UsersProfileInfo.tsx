import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {allAPI, TypeEnum} from "../../Api/Api";
import styled from "styled-components";

type ProfileInfoProps = {}

type UserProfile = {
    name: string
    gender: string
    height: number


}

export const ProfileInfo: React.FC<ProfileInfoProps> = ({}) => {
    const params = useParams()
    const {id} = params
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

    useEffect(() => {
        id && allAPI.getInfo(id,TypeEnum.People)
            .then(res => {
                setUserProfile(res)
            })
    }, [])


    return (
        <Container>
            <TextNames>
                <StyledSpan>Name:</StyledSpan><span>{userProfile?.name}</span>
            </TextNames>
            <TextNames>
                <StyledSpan>Gender:</StyledSpan><span>{userProfile?.gender}</span>
            </TextNames>
            <TextNames>
                <StyledSpan>Height:</StyledSpan><span>{userProfile?.height}</span>
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