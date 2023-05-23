import axios from "axios"

export const getWorlwideData = async()=>{
    const res = await axios(`https://disease.sh/v3/covid-19/all`)
    return res.data
}


export const getCountryWiseData = async()=>{
    const res = await axios(`https://disease.sh/v3/covid-19/countries`)
    return res.data
}

export const getDateWiseData = async()=>{
    const res = await axios(`https://disease.sh/v3/covid-19/historical/all?lastdays=all`)
    return res.data
}
