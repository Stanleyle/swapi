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
        <div>
            <ProfileInfoS>
                {userProfile?.name}
            </ProfileInfoS>

            <ProfileInfoS>

                {userProfile?.gender}
            </ProfileInfoS>

            <ProfileInfoS>
                {userProfile?.height}
            </ProfileInfoS>
        </div>
    )
}

const ProfileInfoS = styled.div`
  background-color:white;
  border: 2px solid gray;
  border-radius: 10px;
  width: 250px;
  cursor: pointer;
  
  
  :hover {
    border-color: wheat;
  }
`
