const API_KEY = "367418dc6317f42645c39965eb1a6680";


const requests = {
    fetchTrending : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
   fetchNetflixOriginal : `discover/tv?api_key=${API_KEY}&with_networks=213`,
 fetchActionMovies : `discover/tv?api_key=${API_KEY}&with_networks=28`,
 fetchComedyMovies :  `discover/tv?api_key=${API_KEY}&with_networks=35`,
 fetchHorrorMovies : `discover/tv?api_key=${API_KEY}&with_networks=25`,
fetchDocumentries :  `discover/tv?api_key=${API_KEY}&with_networks=99`,
 fetchAnime: `discover/tv?api_key=${API_KEY}&with_networks=98`,
};
export default requests;