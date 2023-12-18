import '../../assets/css/dashboardhome.css';
import SideNav from './sideNav';
import Camera from './camera'


const DashboardCamera = () => {
  return (
    <>
        <div className='row'>
            <div className='col-sm-3'>
               <SideNav />
            </div>
            <div className='col-sm-12'>
              <Camera />
            </div>
        </div>
    </>
  );
};

export default DashboardCamera;
