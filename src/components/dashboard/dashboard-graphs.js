import '../../assets/css/dashboardhome.css';
import SideNav from './sideNav';
import GraphHome from './GraphHome';

const DashboardGraph = () => {
  return (
    <>
        <div className='row'>
            <div className='col-sm-2'>
               <SideNav />
            </div>
            <div className='col-sm-9'>
              <GraphHome />
            </div>
        </div>
    </>
  );
};

export default DashboardGraph;
