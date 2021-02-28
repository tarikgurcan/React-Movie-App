import React from "react";

const Movies = ({ Moviedatas }) => {

    const ratingcolors=(value)=>{
        if(value>8){
            return ("green")
        }
        else if(value >5.5){
            return ("orange")
        }
        else{
            return ("red")
        }
    }

  return (
    <main>
      {Moviedatas.map((data,index) => {
        return(
        <div className="movie" key={index}>
          <img
            src={`https://image.tmdb.org/t/p/w1280${data.poster_path}`}
            alt={data.title}
          />
          <div className="movie-info">
            <h3>{data.title}</h3>
            <span className={(ratingcolors(data.vote_average))}>
              {data.vote_average}
            </span>
          </div>
          <div className="overview">
            <h3>Overview</h3>
            <div className="scroll">{data.overview}</div>
          </div>
        </div>);
      })}
    </main>
  );
};

export default Movies;
