import '../../assets/css/banner.css';
import Currentplant from '../../assets/images/tomatoes.jpg';
import Temp from '../../assets/images/temp.png';
import Crop from '../../assets/images/crop.png';
import Water from '../../assets/images/water.png';
import Ph from '../../assets/images/ph.png';


const CurrentPlant = () => {

  return (
    <>

    <div className='plant-outer'>
        <div className='desc-outer row'>
            <div className='col-sm-4 desc-plant'>
                Environment Statistics <br></br>
            </div>
            <div className='col-sm-7'>
            </div>
        </div>
        <div className='sensor-data-outer row'>
            <div className='sensor-data col-sm-3'>
                <center>
                    <div className='sensor-stats sensor-statss'>
                        5 Pa <br></br>
                        <small>
                        <i class="fi fi-rr-info"></i> &nbsp; Vapor Pressure Deficit (Pa)
                        </small>
                    </div>
                </center>
            </div>
            <div className='sensor-data col-sm-3'>
                <center>
                    <div className='sensor-stats sensor-statss'>
                        72% <br></br>
                        <small>
                        <i class="fi fi-rr-info"></i> &nbsp; Humidity Percentage
                        </small>
                    </div>
                </center>
            </div>
            <div className='sensor-data col-sm-3'>
                <center>
                    <div className='sensor-stats sensor-statss'>
                        18-24<sup>&deg;</sup>C <br></br>
                        <small>
                        <i class="fi fi-rr-info"></i> &nbsp; Temperature (C)
                        </small>
                    </div>
                </center>
            </div>
            <div className='sensor-data col-sm-3'>
                <center>
                    <div className='sensor-stats sensor-statss'>
                    5<sup>&deg;</sup>C <br></br>
                        <small>
                        <i class="fi fi-rr-info"></i> &nbsp; Dew Point (C)
                        </small>
                    </div>
                </center>
            </div>
        </div>

    </div>


    <div className='plant-outer'>
        <div className='desc-outer row'>
            <div className='col-sm-1'>
                <img src={Currentplant} className='img-plant'></img>
            </div>
            <div className='col-sm-4 desc-plant'>
                Tomatoes <br></br>
                <small>Solanum lycopersicum</small>
            </div>
            <div className='col-sm-7'>
            </div>
        </div>
        <div className='sensor-data-outer row'>
            <div className='sensor-data col-sm-3'>
                <center>
                    <div className='sensor-data-img' style={{backgroundColor:'#f7c4db'}}>
                        <img className='sensor-img' src={Crop} style={{position:'relative', top:'25px', width: '70px', height:'70px', borderRadius:'20px'}}></img>
                    </div>
                    <div className='sensor-stats'>
                        5 mho <br></br>
                        <small>
                        <i class="fi fi-rr-info"></i> &nbsp; Electronic Conductivity
                        </small>
                    </div>
                </center>
            </div>
            <div className='sensor-data col-sm-3'>
                <center>
                    <div className='sensor-data-img' style={{backgroundColor:'#efdfac'}}>
                        <img className='sensor-img' src={Temp} style={{position:'relative', top:'25px', width: '80px', height:'70px'}}></img>
                    </div>
                    <div className='sensor-stats'>
                        18-24<sup>&deg;</sup>C <br></br>
                        <small>
                        <i class="fi fi-rr-info"></i> &nbsp; Temperature
                        </small>
                    </div>
                </center>
            </div>
            <div className='sensor-data col-sm-3'>
                <center>
                    <div className='sensor-data-img' style={{backgroundColor:'#b4e9fa'}}>
                        <img className='sensor-img' src={Ph} style={{position:'relative', top:'25px', width: '90px', height:'70px'}}></img>
                    </div>
                    <div className='sensor-stats'>
                        3.4 <br></br>
                        <small>
                        <i class="fi fi-rr-info"></i> &nbsp; Daily Water pH
                        </small>
                    </div>
                </center>
            </div>
        </div>

    </div>
    </>
  );
};

export default CurrentPlant;
