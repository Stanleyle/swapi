import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";


export const HomePage = () => {
    const navigate = useNavigate()
    const redirectPeople = () => {
        navigate(`/people`)
    }
    const redirectFilms = () => {
        navigate(`/films`)
    }
    const redirectStarships = () => {
        navigate(`/starships`)
    }
    const redirectSpecies = () => {
        navigate(`/species`)
    }


    return (<Wrapper>

        <StyledButton onClick={redirectPeople}>People</StyledButton>
        <StyledButton onClick={redirectFilms}>Films</StyledButton>
        <StyledButton onClick={redirectStarships}>Starships</StyledButton>
        <StyledButton onClick={redirectSpecies}>Species</StyledButton>

    </Wrapper>)
}

export const StyledButton = styled.button`
  background-color: rgba(145, 13, 13, 0.43);
  display: block;
  height: 100px;
  margin: 1px;
  border: 15px solid #781045;
  border-radius: 100px;
  width: 500px;
  cursor: pointer;
: hover {
  border-color: #f12709;
}

`
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px
`

