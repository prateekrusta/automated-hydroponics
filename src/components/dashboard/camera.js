import '../../assets/css/dashboardhome.css';
import plantImage from '../../assets/images/login-image.jpg';

const Camera = () => {
  return (
    <>
    <div className='plant-outer plant-outerr' style={{marginLeft:'50px'}}>
        <div className='desc-outer row'>
            <div className='col-sm-4 desc-plant'>
                Camera Snapshots <br></br>
            </div>
            <div className='col-sm-7'>
            </div>
        </div>
        <div className='sensor-data-outer row'>
            <div className='sensor-data sensor-data-images col-sm-3'>
                <center>
                    <div className='sensor-stats sensor-statss'>
                        <img src={plantImage} className='camera-snapshots'></img>
                        <br></br>
                        <small>
                        Image 1
                        </small>
                    </div>
                </center>
            </div>
            <div className='sensor-data sensor-data-images col-sm-3'>
                <center>
                    <div className='sensor-stats sensor-statss'>
                        <img src={plantImage} className='camera-snapshots'></img>
                        <br></br>
                        <small>
                        Image 2
                        </small>
                    </div>
                </center>
            </div>
            <div className='sensor-data sensor-data-images col-sm-3'>
                <center>
                    <div className='sensor-stats sensor-statss'>
                        <img src={plantImage} className='camera-snapshots'></img>
                        <br></br>
                        <small>
                        Image 3
                        </small>
                    </div>
                </center>
            </div>
        </div>

    </div>
    </>
  );
};

export default Camera;
