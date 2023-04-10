import React from 'react'
import "./HomeScreen.css"
import Nav from './Nav'
import Banner from './Banner'
import requests from './Requests'
import Row from './Row'

function HomeScreen() {

    
    return (
        <div className="homeScreen">
            <Nav />
  
            <Banner />

            <Row
                title="Netflix Originals"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />

            <Row
                title="Aktuell beliebt"
                fetchUrl={requests.fetchTrending}
            />

            <Row
                title="Actionfilme"
                fetchUrl={requests.fetchActionMovies}
            />

            <Row
                title="Comedyfilme"
                fetchUrl={requests.fetchComedyMovies}
            />

            <Row
                title="Horrorfilme"
                fetchUrl={requests.fetchHorrorMovies}
            />

            <Row
                title="Romantikfilme"
                fetchUrl={requests.fetchRomanceMovies}
            />

            <Row
                title="Dokumentationen"
                fetchUrl={requests.fetchDocumentaries}
            />
            
        </div>
            
        
    )
}

export default HomeScreen;
