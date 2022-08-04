import React, {useCallback, useEffect, useState} from "react";
import {allAPI, TypeEnum} from "../../Api/Api";
import {Pagination} from "../../components/Pagination/Pagination";
import {List} from "../users/List";
import {AppProps} from "../../App";
import preloader from '../../Preloader/rpeloader.gif'

type AllUsersProps = {}

export const PeopleList: React.FC<AllUsersProps> = ({}) => {

    const [allUsers, setAllUsers] = useState<AppProps[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(1)
    const countPerPage = 10
    const [isFetching, setIsFetching] = useState(true)
    const [value, setValue] = useState<string>('')

    const fetch = useCallback((searchParams?: string) => {
        return allAPI.getList(currentPage, TypeEnum.People, searchParams)
    }, [currentPage])


    useEffect(() => {
        fetch('')
            .then(res => {
                setAllUsers(res.results)
                setCount(res.count)
                setIsFetching(false)
            })

    }, [fetch])

    const search = useCallback(async () => {
        setIsFetching(true)
        try {
            const res = await fetch(value)
            setAllUsers(res.results)
        } catch (e) {
            console.error(e)
        } finally {
            setIsFetching(false)
        }
    }, [fetch, value])


    const handeChangeCurrentPage =
        useCallback((page: number | ((prevVar: number) => number)) =>
                setCurrentPage(page),
            [setCurrentPage])


    return <div>
        {/*<>
            {isFetching
                ?
                <img src={preloader} alt='my-gif'/>
                :
                <>
                    <List allUsers={allUsers} type={'people'}/>
                    {count > countPerPage &&
                        <Pagination count={count}
                                    countPerPage={countPerPage}
                                    setCurrentPage={handeChangeCurrentPage}
                                    currentPage={currentPage}/>}
                </>}
        </>*/}
        <>
            <input
                value={value}
                onChange={(event) => {
                    setValue(event.target.value)
                }}
            />
            <button
                disabled={!value}
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
                <List allUsers={allUsers} type={'people'}/>
                {count > countPerPage &&
                    <Pagination
                        count={count}
                        countPerPage={countPerPage}
                        setCurrentPage={handeChangeCurrentPage}
                        currentPage={currentPage}/>
                }
            </>
        }
    </div>
}

