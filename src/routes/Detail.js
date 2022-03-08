import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";
function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMovies] = useState(); // 앞에 Home에 있는 movies와 달리 movie는 영화의 상세이기 때문에 한 건이라 배열이 아님

    // url의 상세정보를 알려주는 역할을 함
    const {test} = useParams()
    const getMovie = async() => {
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${test}`)).json();
        setMovies(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    },[])

    return (
    <div>
        {loading ? <h1>Loading...</h1> : 
            <div>
            <Movie
            key = {movie.id}
            id = {movie.id}
            mediumCoverImage = {movie.medium_cover_image}
            title = {movie.title}
            summary = {movie.description_intro}
            genres = {movie.genres}
            />
          </div>
        }
        <div>

        </div>
    </div>)
}

export default Detail;