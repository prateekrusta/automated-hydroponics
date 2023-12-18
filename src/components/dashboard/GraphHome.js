import '../../assets/css/banner.css';
import Currentplant from '../../assets/images/tomatoes.jpg';
import Temp from '../../assets/images/temp.png';
import Crop from '../../assets/images/crop.png';
import Water from '../../assets/images/water.png';
import Graph from './Graphs';
import Ph from '../../assets/images/ph.png';


const CurrentPlant = () => {

  return (
    <>

    <div className='plant-outer'>
        <div className='desc-outer row'>
            <div className='col-sm-4 desc-plant'>
                Water Level Graph <br></br>
            </div>
            <div className='col-sm-7'>
            </div>
        </div>
        <div className='sensor-data-outer row'>
           <Graph />
        </div>
    </div>

    <div className='plant-outer'>
        <div className='desc-outer row'>
            <div className='col-sm-4 desc-plant'>
                Water Level Graph <br></br>
            </div>
            <div className='col-sm-7'>
            </div>
        </div>
        <div className='sensor-data-outer row'>
           <Graph />
        </div>
    </div>
    <br></br>
    </>
  );
};

export default CurrentPlant;
