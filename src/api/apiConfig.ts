type apiConfigType={
   baseUrl: string;
   apiKey: string;
   originalImage: (imgPath: any) => string;
   w500Image: (imgPath: any) => string;
}

const apiConfig: apiConfigType = {
   baseUrl: 'https://api.themoviedb.org/3/',
   apiKey: 'get from themoviedb.org',
   originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
   w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;