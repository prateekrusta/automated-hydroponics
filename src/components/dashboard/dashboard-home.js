import '../../assets/css/dashboardhome.css';
import SideNav from './sideNav';
import Banner from './banner'

const DashboardHome = () => {
  return (
    <>
        <div className='row'>
            <div className='col-sm-3'>
               <SideNav />
            </div>
            <div className='col-sm-12'>
              <Banner />
            </div>
        </div>
    </>
  );
};

export default DashboardHome;
