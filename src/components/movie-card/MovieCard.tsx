import Button from '../button/Button';

import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { Link } from 'react-router-dom';
import './movi-card.scss';

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

type MovieCardType = {
    item: any
    category: any
}


const MovieCard: React.FC<MovieCardType> = props => {

    const item = props.item;
    const link = '/' + category[props.category] + '/' + item.id;
    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
    return (
        <Link to={link}>
            <div className="movie-card" style={{ backgroundImage: `url(${bg})` }} >
                <Button>
                    <i className="bx bx-play" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  stroke-linecap="round" ><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    </i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
}

export default MovieCard;