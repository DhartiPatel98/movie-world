const API_KEY = process.env.API_KEY;

export function getBaseApiUrl(): string {
    return 'https://api.themoviedb.org/3';
}

export function getTrendingOrTopRatedApiUrl(isTopRated = false): string {
    if(isTopRated){
        return `${getBaseApiUrl()}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
    }

    return `${getBaseApiUrl()}/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`;
}

export function getMovieDetailsURL(id: string): string {
    return `${getBaseApiUrl()}/movie/${id}?api_key=${API_KEY}`
}

export function getSearchMovieApiUrl(search: string): string {
    return `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}&language=en-US&page=1`
}