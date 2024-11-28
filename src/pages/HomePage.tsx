import mobilesImage from "../assets/mobiles.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "../components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Takeaway without the walk-away
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar
          placeHolder="search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={mobilesImage} alt="mobiles with the app" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter text-orange-500">
            Order takeaway even faster!
          </span>
          <span>
            Download the QuickBite App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} alt="app downloads image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
