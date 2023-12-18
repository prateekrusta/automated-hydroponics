import '../../assets/css/banner.css';

const Header = () => {

let separator=' ';
let newDate = new Date();
let date_raw = newDate.getDate();
let month_raw = newDate.getMonth() + 1;
let year = newDate.getFullYear();
var date, month
  
if (date_raw<10)  {  date ="0"+date_raw.toString()} else {  date =date_raw.toString()}
if (month_raw<10)  {  month ="0"+month_raw.toString()} else {  month =month_raw.toString()}
const day = newDate.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


  return (
        <>
            <div className='row'>
                <div className='heading col-sm-4'>
                    Welcome Back, <b>Prateek</b>!    
                    <br />
                    <small>  <i class="fi fi-rr-calendar-day"></i> &nbsp; {dayNames[day]}, {date}{separator}{new Date().toLocaleString("en-US", { month: "long" })}{separator}{year}</small>
                </div>
                <div className='col-sm-8'>
                    <button className='search-bell'>
                        CPU Temperature : 50<sup>&deg;</sup>C
                    </button>
                    <button className='search-bell'>
                        GPU Temperature : 50<sup>&deg;</sup>C
                    </button>
                    <button className='search-bell'>
                       Up Time : 50s
                    </button>
                </div>
            </div>
        </>
  );
};

export default Header;
