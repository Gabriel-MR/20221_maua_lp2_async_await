//https://api.openweathermap.org/data/2.5/forecast?q=Itu&&appid=1c0f4f6d9368fdcfef13f735b0d92fdenpm

require('dotenv').config()
const exios = require ('axios')

// const PROTOCOL = process.env.POTOCOL
// const BASE_URL = process.env.BASE_URL
// const APPID = process.env.APPID
// const LANGUAGE = process.env.LANGUAGE
// const UNITS = process.env.UNITS

const {PROTOCOL, BASE_URL, APPID, LANGUAGE, UNITS, Q} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&q=${Q}`

console.log(url)