import React, {useCallback, useEffect, useState} from "react";
import {allAPI, TypeEnum} from "../Api/Api";
import {AppProps} from "../App";
import {Pagination} from "../components/Pagination/Pagination";
import {List} from "./components/List";
import preloader from '../Preloader/rpeloader.gif'

type AllUsersProps = {}

export const Species: React.FC<AllUsersProps> = ({}) => {

    const [species, setSpecies] = useState<AppProps[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [count,setCount] = useState(1)
    const countPerPage = 10

    const[isFetching,setIsFetching] = useState(true)
    const[value,setValue] = useState<string>('')


    const fetch = useCallback((searchParams?:string)=>{
        return allAPI.getList(currentPage,TypeEnum.Species,searchParams)
    },[currentPage])

    useEffect(() => {
        fetch('')
            .then(res => {
                setSpecies(res.results)
                setCount(res.count)
                setIsFetching(false)
            })
    },[fetch])

    const search = useCallback(async ()=>{
        setIsFetching(true)
        try{
            const res = await fetch(value)
            setSpecies(res.results)
        }catch (e){
            console.log(e)
        }finally {
            setIsFetching(false)
        }
    },[fetch,value])

    const handeChangeCurrentPage =
        useCallback((page:number | ((prevVar:number)=>number)) =>
            setCurrentPage(page),
    [setCurrentPage])

    return <div>
        <>
        <input value={value}
                onChange={(e)=> {
                    setValue(e.target.value)
                }}
        />
            <button disabled={!value}
                    type={'submit'}
                    onClick={search}
            >Search
            </button>
        </>
        {isFetching ?
            <img src={preloader} alt='my-gif'/>
            :
            <>
                <List species={species} type={'species'}/>
                {count > countPerPage &&
                    <Pagination
                        setCurrentPage={handeChangeCurrentPage}
                        count={count}
                        countPerPage={countPerPage}
                        currentPage={currentPage}
                    />
                }
            </>
        }
    </div>
}