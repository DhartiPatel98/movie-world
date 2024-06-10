import { Movie } from "@/app/page";

interface IProps {
  list: Array<Movie>;
}

const MovieList: React.FC<IProps> = ({ list }) => (
  <div>
    {list.map((item) => (
      <div key={item.id}>
        <h5>{item.title || item.original_name}</h5>
        <p>{item.overview}</p>
      </div>
    ))}
  </div>
);

export default MovieList;
