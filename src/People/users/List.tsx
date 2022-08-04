import React from "react";
import {AppProps} from "../../App";
import {ShortCard} from "./ShordCart";
import styled from "styled-components";

type ListProps = {
    allUsers:AppProps[]
    type: string
}


export const List :React.FC<ListProps> = ({allUsers, type}) => {
    return (
        <WrapperDIV>
            {allUsers.map(user => {
                const id = user.url.split('/')[5]
                return <ShortCard type={type} id={id}
                                  key={id} name={user.name || ''}
                                  gender={user.gender}
                                  user={user.user}
                />
            })}
        </WrapperDIV>
            )
}
export const WrapperDIV = styled.div`
      background-color: #fff;
      border: 1px solid #781045;
      border-radius: 5px;
      width: 300px;
      cursor: pointer;
    `
