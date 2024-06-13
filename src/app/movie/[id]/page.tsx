import { Movie } from "@/app/page";
import { getMovieDetailsURL } from "@/utils/helperMethods";
import { NextPage } from "next";
import Image from "next/image";

interface IProps {
  params: {
    id: string;
  };
}

const MovieDetails: NextPage<IProps> = async ({ params }) => {
  const response = await fetch(getMovieDetailsURL(params?.id || ""), {
    next: { revalidate: 10000 },
  });
  const details: Movie | undefined = await response.json();

  if (!details) {
    return null;
  }

  const {
    title,
    original_name,
    poster_path,
    backdrop_path,
    first_air_date,
    overview,
    release_date,
    vote_count,
    genres,
    spoken_languages,
  } = details;

  return (
    <div className="w-full mt-6 md:flex md:flex-row md:justify-start md:gap-8">
      <Image
        alt={title || original_name}
        src={`https://image.tmdb.org/t/p/original/${
          backdrop_path || poster_path
        }`}
        width={500}
        height={300}
        className="rounded-lg"
      />
      <div>
        <h2 className="sm:text-lg lg:text-2xl xl:text-3xl font-bold">
          {title || original_name}
        </h2>
        <p className="sm:text-md lg:text-xl mt-3 text-justify">{overview}</p>
        <div className="mt-3 sm:text-md lg:text-lg">
          <div>
            <b>Genre:</b>{" "}
            <span>{genres.map((genere) => genere.name).join(", ")}</span>
          </div>
          <div className="mt-2">
            <b>Language:</b>{" "}
            <span>
              {spoken_languages.map((language) => language.name).join(", ")}
            </span>
          </div>
          <div className="mt-2">
            <b>Date Released:</b> <span>{release_date || first_air_date}</span>
          </div>
          <div className="mt-2">
            <b>Likes:</b> <span>{vote_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
