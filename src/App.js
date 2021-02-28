import { useEffect, useState } from "react";
import Movies from "./components/Movies";
import Navi from "./Navi";


function App() {
    const[Moviedatas,changeDatas]=useState([])
    const key = "5b319946fdd45d5f9eb38e80a24a89d8";
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}&page=`;
    const search_url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query="`;

const getDatas=()=>{
    let page=Math.floor(Math.random()*500)+1
    fetch(url+page).then(resolve=>resolve.json()).then(data=>changeDatas(data.results))
}

const searchMovie=(input)=>{
  fetch(search_url+input).then(resolve=>resolve.json()).then(data=>changeDatas(data.results))

}

const takeInputFromForm=(e)=>{
  if(!!e.target.search.value){
  searchMovie(e.target.search.value)}
  else{
    window.location.reload()
  }
  e.preventDefault();
}

useEffect(()=>{
  getDatas();
},[])

  return (
    <div>
      <Navi takeInputFromForm={takeInputFromForm} />
      <Movies Moviedatas={Moviedatas}/>
    </div>
  );
}

export default App;
