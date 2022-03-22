import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Button, { OutlineButton } from '../button/Button';
import { ModalContent, ModalComp } from '../modal/Modal';

import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './hero-slide.scss';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { AxiosResponse } from 'axios';

SwiperCore.use([EffectCoverflow, Pagination, Autoplay]);
const HeroSlide = () => {

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 }
      try {
        const response: any = await tmdbApi.getMoviesList(movieType.popular, { params });
        setMovieItems(response.results.slice(1, 4));
        console.log(response);
      } catch {
        console.log('error');
      }
    }
    getMovies();
  }, []);
  console.log('movieItems ', movieItems)
  return (
    <div className="hero-slide">
      <Swiper
        //@ts-ignore
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        // onSlideChange={() => console.log('!!')}

        slidesPerView={1}
      // autoplay={{delay: 3000}}
      >

        {
          movieItems.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
              )}
            </SwiperSlide>
          ))
        }
      </Swiper>
      {
        movieItems.map((item, i) => <TrailerModal key={i} item={item} />)
      }
    </div>

  );
}

type HeroSlideItemProps = {
  item: any
  className: string
  
}
const HeroSlideItem: React.FC<HeroSlideItemProps> = ({ item, className }) => {

  let navigate: NavigateFunction = useNavigate();


  const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

  const setModalActive: React.MouseEventHandler<HTMLButtonElement> = async () => {
    const modal:any = document.querySelector(`#modal_${item.id}`);
    console.log(modal)
    const videos: any = await tmdbApi.getVideos(category.movie, item.id);
    console.log(videos)

    if (videos.results.length > 0) {
      const videSrc = 'https://www.youtube.com/embed/' + videos.results[0].key;
      modal.querySelector('.modal__content > iframe').setAttribute('src', videSrc);
      console.log(videSrc)
    } else {
      modal.querySelector('.modal__content').innerHTML = 'No trailer';
    }

    modal.classList.toggle('active');
  }

  return (
    <div
      className={`hero-slide__item ${className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button
              onClick={() => navigate('/movie/' + item.id)}
            >
              Watch now
            </Button>
            <OutlineButton onClick={setModalActive}>
              Watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  )
}

const TrailerModal = (props: any) => {
  const item = props.item;

  const iframeRef: any = useRef(null);

  const onClose = () => iframeRef.current.setAttribute('src', '');

  return (
    <ModalComp active={false} id={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe ref={iframeRef} width="100%" height="500px" title="trailer"></iframe>
      </ModalContent>
    </ModalComp>
  )
}

export default HeroSlide;