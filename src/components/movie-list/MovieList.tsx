import React, { useState, useEffect } from 'react';

import './movie-list.scss';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { SwiperSlide, Swiper } from 'swiper/react';
///sffddffdfd

import tmdbApi, { category } from '../../api/tmdbApi';

import MovieCard from '../movie-card/MovieCard';

type MovieListType = {
  type: string
  category: any
  id?: any

}

const MovieList: React.FC<MovieListType> = (props) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {


      const params = {};

      if (props.type !== 'similar') {
        switch (props.category) {
          case category.movie:
            {
              let response: any = await tmdbApi.getMoviesList(props.type, { params });
              setItems(response.results);
              break;
            }
          default:
            {
              let response: any = await tmdbApi.getTvList(props.type, { params });
              setItems(response.results);
            }
        }
      } else {
        let response = await tmdbApi.similar(props.category, props.id);
      }

    }
    getList();

  }, []);


  return (
    <div className="movie-list">
      <Swiper
        grabCursor={true}
        spaceBetween={10}
        slidesPerView={'auto'}
      >
        {
          items.map((item, i) => (
            <SwiperSlide key={i}>
              <MovieCard item={item} category={props.category} />
            </SwiperSlide>
          ))

        }
      </Swiper>

    </div>
  );
}



export default MovieList;