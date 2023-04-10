import React, { useState, useEffect } from 'react'
import './Banner.css'
// file
import axios from './axios'
import requests from './Requests'

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchdata(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    // generate a new film
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }

        fetchdata();
    }, [])

    // description text limit function
    // parameter string=text and n=textlimit
    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center center",

        }}>
            <div className="banner__contents">
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button  className="banner__button">Film abspielen</button>
                    <button className="banner__button">Meine Liste</button>
                </div>
                <h1 className="banner__description">
                    {
                        truncate(movie?.overview, 150)
                    }
                </h1>
            </div>

            <div className="banner--fadeButtom" />

        </header>
    )
}

export default Banner
