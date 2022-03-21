import { AxiosResponse } from "axios";
import axiosClient from "./axiosClient";


export const category:any = {
   movie: 'movie',
   tv: 'tv'
}

export type movieType = {
   upcoming: string;
   popular: string;
   top_rated: string;
}
export const movieType: any = {
   upcoming: 'upcoming',
   popular: 'popular',
   top_rated: 'top_rated'
}

export type tvTypeType = {
   popular: string;
   top_rated: string;
   on_the_air: string;
}

export const tvType: any = {
   popular: 'popular',
   top_rated: 'top_rated',
   on_the_air: 'on_the_air'
}




const tmdbApi = {
   getMoviesList: (type: string, params: any):Promise<AxiosResponse<any, any>> => {
      const url = 'movie/' + movieType[type];
      return axiosClient.get(url, params);
   },
   getTvList: (type: string, params: any):Promise<AxiosResponse<any, any>> => {
      const url = 'tv/' + tvType[type];
      return axiosClient.get(url, params);
   },
   getVideos: (cate: string, id: number):Promise<AxiosResponse<any, any>> => {
      const url = category[cate] + '/' + id + '/videos';
      return axiosClient.get(url, { params: {} });
   },
   search: (cate: string, params: any):Promise<AxiosResponse<any, any>> => {
      const url = 'search/' + category[cate];
      return axiosClient.get(url, params);
   },
   detail: (cate: string, id: number, params: any):Promise<AxiosResponse<any, any>> => {
      const url = category[cate] + '/' + id;
      return axiosClient.get(url, params);
   },
   credits: (cate: string, id: number):Promise<AxiosResponse<any, any>> => {
      const url = category[cate] + '/' + id + '/credits';
      return axiosClient.get(url, { params: {} });
   },
   similar: (cate: string, id: number):Promise<AxiosResponse<any, any>> => {
      const url = category[cate] + '/' + id + '/similar';
      return axiosClient.get(url, { params: {} });
   },
}

export default tmdbApi;