const API_KEY="e84053fc36c1ffea9e7e3829bfe3b3b0";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=de`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks_213&language=de`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=de`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=de`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=de`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=de`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=de`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=de`,
};



export default requests;