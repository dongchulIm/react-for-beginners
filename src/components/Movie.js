import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, mediumCoverImage, title, summary, genres}) {
    return <div>
        <h1>WOW!!!!!</h1>
        <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
        <p>{summary}</p>
        <ul>
        {genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
    </div>;
}

Movie.propType = {
    id: propTypes.number.isRequired,
    mediumCoverImage : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    summary : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string).isRequired,
}

export default Movie;