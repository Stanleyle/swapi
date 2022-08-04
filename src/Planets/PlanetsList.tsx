import React, {useCallback, useEffect, useState} from "react";
import {allAPI, TypeEnum} from "../Api/Api";
import {Pagination} from "../components/Pagination/Pagination";
import {AppProps} from "../App";
import {List} from "./PlanetsInfo/List";
import preloader from "../Preloader/rpeloader.gif"

type AllPlanetsProps = {}


export const PlanetsList: React.FC<AllPlanetsProps> = ({}) => {

    const [planets, setPlanets] = useState<AppProps[]>([])
    const [currentPage, setCurrenPage] = useState(1)
    const [count, setCount] = useState(1)
    const countPerPage = 10
    const [isFetching, setIsFetching] = useState(true)
    const [value, setValue] = useState<string>('')

    const fetch = useCallback((searchParams?: string) => {
        return allAPI.getList(currentPage, TypeEnum.Planets, searchParams)
    }, [currentPage])

    useEffect(() => {
        fetch('')
            .then(res => {
                setPlanets(res.results)
                setCount(res.count)
                setIsFetching(false)
            })
    }, [fetch])

    const search = useCallback(async () => {
        setIsFetching(true)
        try {
            const res = await fetch(value)
            setPlanets(res.results)
        } catch (e) {
            console.log(e)
        } finally {
            setIsFetching(false)
        }
    }, [fetch, value])

    const handeChangeCurrentPage =
        useCallback((page: number | ((prevVar: number) => number)) =>
                setCurrenPage(page),
            [setCurrenPage]
        )

    return <div>
        <>
            <input
                value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                }}
            />
            <button disabled={!value}
                    type={'submit'}
                    onClick={search}
            >
                search
            </button>
        </>
        {isFetching ?
            <img src={preloader} alt='my-gif'/>
            :
            <>
                <List planets={planets} type={'planets'}/>
                {count > countPerPage &&
                <Pagination setCurrentPage={handeChangeCurrentPage}
                            count={count}
                            countPerPage={countPerPage}
                            currentPage={currentPage}/>
                }
            </>
        }
    </div>
}
