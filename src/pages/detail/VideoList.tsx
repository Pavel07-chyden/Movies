import React, { useState, useEffect, useRef, FC, MutableRefObject } from 'react';

import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';

type VideoListType={
   id:number
}

const VideoList:FC<VideoListType> = props => {

   const { category }:any = useParams();

   const [videos, setVideos] = useState([]);

   useEffect(() => {
      const getVideos = async () => {
         const res:any = await tmdbApi.getVideos(category, props.id);
         setVideos(res.results.slice(0, 5));
      }
      getVideos();
   }, [category, props.id]);

   return (
      <>
         {
            videos.map((item, i) => (
               <Video key={i} item={item} />
            ))
         }
      </>
   );
}

type VideoType={
   item:any

}
const Video:FC<VideoType> = props => {

   const item = props.item;

   const iframeRef: any = useRef(null);

   useEffect(() => {
      const height:string = iframeRef.current.offsetWidth * 9 / 16 + 'px';
      iframeRef.current.setAttribute('height', height);
   }, []);

   return (
      <div className="video">
         <div className="video__title">
            <h2>{item.name}</h2>
         </div>
         <iframe
            src={`https://www.youtube.com/embed/${item.key}`}
            ref={iframeRef}
            width="100%"
            title="video"
         ></iframe>
      </div>
   )
}

export default VideoList;