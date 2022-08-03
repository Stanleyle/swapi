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
        <div>
            <ProfileInfoS>
                {oneFilmInfo?.title}
            </ProfileInfoS>

            <ProfileInfoS>

                {oneFilmInfo?.director}
            </ProfileInfoS>

            <ProfileInfoS>
                {oneFilmInfo?.episode_id}
            </ProfileInfoS>
        </div>
    )
}

const ProfileInfoS = styled.div`
  background-color: white;
  border: 2px solid gray;
  border-radius: 10px;
  width: 250px;
  cursor: pointer;


  :hover {
    border-color: wheat;
  }
`
