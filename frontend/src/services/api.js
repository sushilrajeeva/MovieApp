import axios from "axios";

const API_KEY = "ca43013490cf1e1eac9f5d2b44c260ef";
const BASE_URL = "https://api.themoviedb.org/3";

const extractResults = (response) => {
    return response.data.results;
}
export const getPopularMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return extractResults(response);
};



export const searchMovies = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    return extractResults(response);
};