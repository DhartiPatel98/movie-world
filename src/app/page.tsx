import MovieList from "@/components/MovieList";
import { getTrendingOrTopRatedApiUrl } from "@/utils/helperMethods";

interface IProps {
  searchParams: {
    [key: string]: string;
  };
}

export interface Movie {
  id: number;
  original_title: string;
  original_name: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  first_air_date: string;
  title: string;
  vote_count: number;
}

const Home: React.FC<IProps> = async ({ searchParams }) => {
  const res = await fetch(
    getTrendingOrTopRatedApiUrl(searchParams.genre === "fetchTopRated"),
    { next: { revalidate: 5000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const results: Array<Movie> = data.results;

  return <MovieList list={results} />;
};

export default Home;
