import React, {useCallback, useEffect, useState} from "react";
import {AppProps} from "../../App";
import {AllStarShipsInfo} from "./AllStarShipsInfo/AllStarShipsInfo";
import {Pagination} from "../../components/Pagination/Pagination";
import {allAPI, TypeEnum} from "../../Api/Api";
import preloader from "../../Preloader/rpeloader.gif";

type StarShipsProps = {}

export const StarShipsList: React.FC<StarShipsProps> = () => {

    const [starshipList, setStarshipList] = useState<AppProps[]>([])
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(1)
    const countPerPage = 10
    const [isFetching, setIsFetching] = useState(true)
    const [value,setValue] = useState<string>('')

    const fetch = useCallback((searchParams?: string) => {
        return allAPI.getList(page, TypeEnum.starships, searchParams)
    }, [page])

    useEffect(() => {
        fetch('')
            .then(res => {
                setCount(res.count)
                setStarshipList(res.results)
                setIsFetching(false)
            })
    }, [fetch])

    const search = useCallback(async () => {
        setIsFetching(true)
        try {
            const res = await fetch(value)
            setStarshipList(res.results)
        } catch (e) {
            console.error(e)
        } finally {
            setIsFetching(false)
        }
    }, [fetch, value])

    const handeChangeCurrentPage = useCallback((page: number | ((prevVar: number) => number)) =>
            setPage(page),
        [setPage])

    return <div>
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
                onClick={search}>search
            </button>
        </>
        {isFetching ?
            <img src={preloader} alt='my-gif'/>
            :
            <>
                <AllStarShipsInfo
                    type={'starships'}
                    starshipList={starshipList}/>
                <Pagination
                    setCurrentPage={handeChangeCurrentPage}
                    count={count}
                    countPerPage={countPerPage}
                    currentPage={page}
                />
            </>}
    </div>

}