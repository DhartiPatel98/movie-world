import { Movie } from "@/app/page";
import MovieList from "@/components/MovieList";
import { getSearchMovieApiUrl } from "@/utils/helperMethods";

interface SearchResults {
  results: Array<Movie>;
}

interface IProps {
  params: {
    search: string;
  };
}

const SearchedMovieList: React.FC<IProps> = async ({ params }) => {
  const res = await fetch(getSearchMovieApiUrl(params?.search || ""), {
    next: { revalidate: 5000 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: SearchResults = await res.json();
  const results: Array<Movie> = data?.results || [];

  if (!results || !results.length) {
    return (
      <h2 className="mt-10 text-center font-bold text-xl">No results found</h2>
    );
  }

  return <MovieList list={results} />;
};

export default SearchedMovieList;
