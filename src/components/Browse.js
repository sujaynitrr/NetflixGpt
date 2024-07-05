import { useSelector } from "react-redux";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SearchGpt from "./SearchgGpt";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  const isToggleShow= useSelector((store)=>store.gptSearch.isToggleShow);

  
  return (
    <div>
      <Header />
      {
        isToggleShow?<SearchGpt/>:(
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </>
        )
      }
    </div>
  );
};

export default Browse;
