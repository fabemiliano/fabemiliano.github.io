import React, { useState, useEffect, useContext } from 'react';
import YouTube from 'react-youtube';
import { getMovieInfo, getMovieVideos, getReviews } from '../services/movieApi';
import { ApplicationContext } from '../context/Context';
import SideBar from './SideBar';
import Loading from './Loading';
import SearchBar from './SearchBar';

function MovieDetails(props) {
  const { props: { match: { params: { id } } } } = props;
  const [data, setData] = useState({});
  const [videos, setVideos] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { apiType, isLoading, setIsLoading } = useContext(ApplicationContext);

  useEffect(() => {
    getMovieInfo(apiType, id).then((result) => setData(result));
    (apiType === 'movie') && getReviews(apiType, id).then((data) => setReviews(data.results));
    getMovieVideos(apiType, id).then(({ results }) => { setVideos(results); setIsLoading(false); });
    return setIsLoading(true);
  }, []);

  function reduceContent(content, url) {
    return (
      <div>
        <p>{`${content.slice(0, 300)}...`}</p>
        <a href={url}>ReadMore</a>
      </div>
    );
  }

  function renderMovieOrShow() {
    return (
      <div>
        <div className="main-info">
          <div>
            <h1>{data.title}</h1>
            <p>{data.overview}</p>
          </div>
        </div>
        <div className="reviews">
          <h2>Reviews</h2>
          {(reviews.length === 0) && <p>No reviews found</p>}
          {(reviews.length > 0) && reviews.map(({ author, content, url }) => (
            <div>
              <p>{author}</p>
              {(content.length < 300) ? <p>{content}</p> : reduceContent(content, url)}
            </div>
          ))}
        </div>
        <div className="video-container">
          {(videos) && videos.reduce((sum, e, i) => {
            if (i < 10) {
              return [...sum, <YouTube videoId={e.key} opts={{ width: '300px', height: '200px' }} />];
            }
            return sum;
          }, [])}
        </div>
        <img className="teste2" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`} alt="" />
      </div>
    );
  }

  function renderPeople() {
    return (
      <div className="people-details">
        <div className="main-info-details">
          <div>
            <h1>{data.name}</h1>
            <h3>{data.birthDay}</h3>
            <p>{data.biography}</p>
            <p>{`DOB: ${data.birthday}`}</p>
            <p>{`POB: ${data.place_of_birth}`}</p>
          </div>
          <img className="teste" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.profile_path}`} alt="" />
        </div>
      </div>
    );
  }

  return (
    <div className="side-and-main">
      <SideBar />
      <SearchBar />
      {(isLoading) && <Loading />}
      {(!isLoading) && (
        <div className="movie-details-container">
          {(apiType !== 'people') && renderMovieOrShow()}
          {(apiType === 'people') && renderPeople()}
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
