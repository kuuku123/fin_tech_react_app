import React ,{useState} from 'react'


const Search = ({ handleClickSearchButton, handleChangeInput }) => {
  return (
    <div>
      <input onChange={handleChangeInput}></input>
      {/* 이벤트 바인딩 */}
      <button onClick={handleClickSearchButton}>검색</button>
    </div>
  );
};
export default Search
