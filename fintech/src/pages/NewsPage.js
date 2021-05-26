import React , {useState} from 'react'
import Header from '../component/common/Header'
import Search from '../component/news/Search'
import NewsList from './NewsList'
import axios from 'axios'


const NewsPage = () => {

  const [news , setnews] = useState([])
  const [searchText, setSearchText] = useState("")

  const handleChangeInput = (e) => {
    setSearchText(e.target.value)
  };
  const handleClickSearchButton = () => {
    let search = searchText
    axios.get(`https://newsapi.org/v2/everything?q=${search}&from=2021-04-26&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5`)
    .then((response) => {
      let resultNewsList = response.data.articles;
      setnews(resultNewsList)

     })
    .catch((error) => {
      console.log(error)
      })
  };


  
  

  return (
    <div>
      <Header title="뉴스검색"></Header>
      <Search handleClickSearchButton = {handleClickSearchButton}  handleChangeInput={handleChangeInput} ></Search>
      <NewsList news={news}></NewsList>
    </div>
  )
}

export default NewsPage