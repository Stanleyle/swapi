import React, {useCallback, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {FilmsInfo} from "../FilmsInfo/FilmsInfo";
import {AppProps} from "../../../App";
import {allAPI, TypeEnum} from "../../../Api/Api";
import preloader from "../../../Preloader/rpeloader.gif";


export const PageFilms = () => {

    const [filmsList, setFimList] = useState<AppProps[]>([])
    const [isFetching,setIsFetching] = useState(true)
    const [value,setValue] = useState<string>('')

    const fetch = useCallback((searchParams:string)=>{
        return allAPI.getList(1,TypeEnum.films,searchParams)
    },[1])

    useEffect(() => {
        allAPI.getList(1, TypeEnum.films)
            .then(res => {
                setFimList(res.results)
                setIsFetching(false)
            })
    }, [])
    const navigate = useNavigate()
    const redirect = () => {
        navigate(`/films/:id`)
    }

    const search = useCallback(async ()=>{
        setIsFetching(true)
        try {
            const res = await fetch(value)
            setFimList(res.results)
        }catch (e){
            console.error(e)
        }finally {
            setIsFetching(false)
        }
    },[fetch,value])

    return (<div>
        <>
        <input
            value={value}
            onChange={(event)=>{
                setValue(event.target.value)
            }}
        />
            <button
                disabled={!value}
                type={'submit'}
                onClick={search}
            >
                Search
            </button>

        </>

        <>
        {isFetching ? <img src={preloader} alt='my-gif'/>:
            <FilmsInfo type={'films'} filmsList={filmsList}/>}</>
    </div>)
}

