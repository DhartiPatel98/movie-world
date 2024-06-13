import { Movie } from "@/app/page";
import Card from "./Card";

interface IProps {
  list: Array<Movie>;
}

const MovieList: React.FC<IProps> = ({ list }) => (
  <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 mt-5">
    {list.map((item) => (
      <Card movie={item} key={item.id} />
    ))}
  </div>
);

export default MovieList;
