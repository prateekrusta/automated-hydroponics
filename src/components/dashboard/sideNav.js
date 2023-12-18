import React from 'react';
import { Link } from 'react-router-dom';
import LogoMain from '../../assets/logos/logo.png';
import '../../assets/css/navbar.css';


const SideNav = () => {
  return (
    <>
    <div className='sideBar'>
        <div>
            <img alt="" src={LogoMain} className='logomain'/>
        </div>
        <div className='sideBar-inner'>
            <div className="nav-links-inner">
                <Link to="/home"><i class="fi fi-ss-leaf"></i></Link>
            </div>
            <div className="nav-links-inner">
                <Link to="/graphs"><i class="fi fi-ss-chart-area"></i></Link>
            </div>
            <div className="nav-links-inner">
                <Link to="/camera"><i class="fi fi-sr-camera"></i></Link>
            </div>
            <div className="nav-links-inner">  
                <Link to="/profile"><i class="fi fi-sr-user-pen"></i></Link>
            </div>
        </div>
        <div className="nav-links-inner nav-links-inner-bottom">
            <Link to="/"><i class="fi fi-br-sign-out-alt"></i></Link>
        </div>
    </div>
    </>
  )
}

export default SideNav;
