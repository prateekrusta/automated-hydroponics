import '../../assets/css/dashboardhome.css';
import SideNav from './sideNav';
import Profile from './profile'


const DashboardProfile = () => {
  return (
    <>
        <div className='row'>
            <div className='col-sm-3'>
               <SideNav />
            </div>
            <div className='col-sm-12'>
              <Profile />
            </div>
        </div>
    </>
  );
};

export default DashboardProfile;
