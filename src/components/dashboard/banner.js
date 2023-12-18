import '../../assets/css/banner.css';
import Header from './header';
import CurrentPlant from './currentPlant';
import Graph from './Graphs';

const Banner = () => {

  return (
    <>
        <div className="banner-outer">
            <Header />
            <CurrentPlant />
        </div>  
    </>
  );
};

export default Banner;
