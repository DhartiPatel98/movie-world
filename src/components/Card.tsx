import Link from "next/link";
import { Movie } from "../app/page";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Card: React.FC<{ movie: Movie }> = (props) => {
  const {
    id,
    poster_path,
    original_name,
    title,
    release_date,
    first_air_date,
    overview,
    vote_count,
    backdrop_path,
  } = props?.movie || {};

  return (
    <div className="group cursor-pointer hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 m-3 sm:m-2 transition-shadow duration-200">
      <Link href={`/movie/${id}`}>
        <Image
          alt={title || original_name}
          src={`https://image.tmdb.org/t/p/original/${
            backdrop_path || poster_path
          }`}
          width={500}
          height={300}
          className="rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{overview}</p>
          <h2 className="text-lg font-bold truncate">
            {title || original_name}
          </h2>
          <div className="flex justify-between">
            <span>{release_date || first_air_date}</span>
            <span>
              <FontAwesomeIcon icon={faThumbsUp} className="mr-1 ml-3" />
              {vote_count}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
