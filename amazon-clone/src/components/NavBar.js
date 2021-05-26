import '../css/NavBar.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/BasketContext';

const NavBar = () => {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="navbar">
            <Link to="/">
                <img className="navbar__logo"
                    src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" alt=""
                />
            </Link>
            <div className="navbar__serach">
                <input className="navbar__searchInput"
                    type="text"
                />
                <SearchIcon className="navbar__searchIcon"></SearchIcon>
            </div>
            
            <div className="navbar__nav">
                <Link to="/login">
                    <div className="navbar__option">
                        <span className="navbar__optionLineOne">Hello Guest</span>
                        <span className="navbar__optionLineTwo">Signin</span>
                    </div>
                </Link>
                <div className="navbar__option">
                    <span className="navbar__optionLineOne">Return</span>
                    <span className="navbar__optionLineTwo">& Order</span>
                </div>

                <div className="navbar__option">
                    <span className="navbar__optionLineOne">Your</span>
                    <span className="navbar__optionLineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="navbar__optionBasket">
                        <ShoppingBasketIcon />
                        <span className ="navbar__optionLineTwo navbar__basketCount">
                            {basket?.length}
                        </span>
                        
                    </div>
                </Link>

    

            </div>



        </div>
    )
}

export default NavBar;


