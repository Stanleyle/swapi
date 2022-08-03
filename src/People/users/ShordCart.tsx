import React from 'react'
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";


type ShortCardProps = {
    name: string
    gender: string
    user: string
    id: string
    type: string

}

export const ShortCard: React.FC<ShortCardProps> = ({name, gender, user, id, type,}) => {
    const navigate = useNavigate()
    const redirect = () => {
        navigate(`/${type}/${id}`)
    }

    return (
        <Wrapper onClick={redirect}>
            {name}
        </Wrapper>

    )


}


export const Wrapper = styled.div`
  background-color: #fff;
  border: 1px solid red;
  border-radius: 5px;
  width: 300px;
  cursor: pointer;

  :hover {
    border-color: blue;
  }
`