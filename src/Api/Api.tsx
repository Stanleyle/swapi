import React from 'react';
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://swapi.dev/api'
})

export enum TypeEnum {
    People='people',
    Starships='starships',
    Films='films',
    Species = 'species'
}

export const allAPI = {
    getList(currentPage: number,type: TypeEnum, searchParams?: string) {
        return instance.get(`/${type}/?page=${currentPage}&search=${searchParams||''}`)
            .then(res =>{
            return res.data
        })
    },
    getInfo(id:string, type: TypeEnum){
        return instance.get(`/${type}/${id}`)
            .then(res =>{
                return res.data
            })
    }
}
