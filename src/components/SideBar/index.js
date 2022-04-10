import { Link } from 'react-router-dom';
import './index.scss';
import LogoW from '../../assests/images/logoW.png'

const SideBar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoW} alt="logo" />
      </Link>
    </div>
  );
};

export default SideBar;