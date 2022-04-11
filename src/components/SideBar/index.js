import { Link } from 'react-router-dom';
import './index.scss';
import LogoW from '../../assests/images/logoW.png'
import LogoSubtitle from '../../assests/images/logoSubtitle.png'

const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to='/'>
        <img src={LogoW} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="wendy" />
      </Link>
    </div>
  );
};

export default SideBar;