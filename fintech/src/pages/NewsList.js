import React , {useState} from 'react'
import axios from 'axios'


const NewsList = ({ news }) => {
  return (
    <div>
      {news.map((data) => {
        return <p>{data.title}</p>;
      })}
    </div>
  );
};
export default NewsList
