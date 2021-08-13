import axios from 'axios'

const domain = 'https://disease.sh/v3/covid-19'
const newsApi = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=d0ec8c224e7a449e909e4fbf1219cfb9'
// export const getHistory = (lastDays = 30) => {
//   return axios.get(domain + `/historical/all?lastdays=${lastDays}`)
// }

export const getHistory = (country = 'all', lastDays = 'all') => {
  return axios.get(domain + `/historical/${country}?lastdays=${lastDays}`)
}

export const getDataAllCountries = () => {
  return axios.get(domain + '/countries')
}

export const getNews = () => {
  return axios.get(newsApi)
}