import React from "react";
import {AppProps} from "../../App";
import {WrapperDIV} from "../../People/users/List";
import {ShortCard} from "../../People/users/ShordCart";


type ListProps = {
    species: AppProps[]
    type: string
}


export const List: React.FC<ListProps> = ({species, type}) => {
    return (
        <WrapperDIV>
            {species.map(specie => {
                const id = specie.url.split('/')[5]
                return <ShortCard key={id} name={specie.name || ''}
                                  gender={specie.gender}
                                  user={specie.user} id={id}
                                  type={type}/>
            })}
        </WrapperDIV>

    )
}
