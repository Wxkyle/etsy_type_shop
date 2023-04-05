import Categories from "./Categories";
import account from '../assets/account.png'
import bell from '../assets/bell.png'
import cart from '../assets/cart.png'
import heart from '../assets/heart.png'
import store from '../assets/store.png'


function TopBar() {

  const iconStyle = "m-3 w-6 h-6"

  return (
    <div className="w-screen grid grid-cols-1 place-items-center border-b-2 border-gray-600">
      <div className="w-screen bg-orange-700" style={{ maxWidth: '1400px' }}>
        <div className="my-2">
          <div className="flex items-center">
            <div className="pr-3">ETSY</div>
            <div className="flex grow border-2 border-black rounded-full bg-yellow-200">
              <input className="flex w-max grow p-4 bg-transparent"></input>
              <button className="p-2 rounded-r-full hover:bg-yellow-300 border-black">o</button>
            </div>
            <img src={heart} className={iconStyle}></img>
            <img src={bell} className={iconStyle}></img>
            <img src={store} className={iconStyle}></img>
            <img src={account} className={iconStyle}></img>
            <img src={cart} className={iconStyle}></img>
          </div>
        </div>
        <div className="mb-2">
          <Categories />
        </div>
      </div>
    </div >
  );
}

export default TopBar;