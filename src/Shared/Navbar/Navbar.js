import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
const Navbar = () => {
  const {user,logout} = useContext(AuthContext)
  const handleLogout = () => {
    logout()
        .then(() => {
            
        }).catch((error) => {

        });
}
const menuItems = <React.Fragment>
        <li><Link to="/allCourses">Courses</Link></li>
        <li><Link to="/allVideoClasses">Video Classes</Link></li>
        <li><Link to="/allJobPreparation">Job Preparation</Link></li>
        {/* {user?.uid?
          <li>
          <Link to="/profile">My Profile</Link>
          </li>
          :
          <></>} */}
        
          
    </React.Fragment>
  return (
    <div className="navbar flex gap-[180px] container mx-auto px-4 py-[30px] sm:px-5 md:px-10 lg:px-20 xl:px-[70px]">
      <div>
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <div className="flex gap-[76.84px]">
          <div>
            <Link to="/"><img src={logo} alt="Sheba Academy" className="w-[
            162.16px] h-[49.06px]"/></Link>
          </div>
          <div className="flex items-center gap-[26px]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <p className="font-medium text-[14px]">English</p>
          </div>
        </div>
      </div>
      <div className="flex gap-[50.07px]">
        <div className="hidden lg:flex gap-[48px] text-[14px] font-semibold list-none">
          {menuItems}
        </div>
        <div className="flex gap-[40.63px]">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>

        </div>
        <div className="ml-[7.03px]">
        {user?.uid ?
            <>
                
                <button className="text-white px-4 py-2 text-[14px] font-normal rounded-lg" style={{ backgroundColor: "rgba(31, 84, 117, 1)" }} onClick={handleLogout}>Sign Out</button>
            </>
            :
            <Link to="/signIn"><button className="text-white px-4 py-2 text-[14px] font-normal rounded-lg" style={{ backgroundColor: "rgba(31, 84, 117, 1)" }}>
            Sign in
          </button></Link>}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;