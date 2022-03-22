import React, { useState, useEffect, FC } from 'react';

import { Params, useParams } from 'react-router-dom';


import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

type CastListType = {
   id: number

}
const CastList: FC<CastListType> = props => {

   const { category }: any = useParams<Params<string>>();

   const [casts, setCasts] = useState([]);

   useEffect(() => {
      const getCredits = async () => {
         const res: any = await tmdbApi.credits(category, props.id);
         setCasts(res.cast.slice(0, 5));
      }
      getCredits();
   }, [category, props.id]);
   return (
      <div className="casts">
         {
            casts.map((item: any, i) => (
               <div key={i} className="casts__item">
                  <div className="casts__item__img" style={{ backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` }}></div>
                  <p className="casts__item__name">{item.name}</p>
               </div>
            ))
         }
      </div>
   );
}

export default CastList;