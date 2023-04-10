import Categories from "./Categories";
import account from '../assets/account.png'
import bell from '../assets/bell.png'
import cart from '../assets/cart.png'
import heart from '../assets/heart.png'
import store from '../assets/store.png'
import NotificationIcon from "./NotificationIcon";
import SearchBar from "./SearchBar";
import { useAtomValue } from "jotai";
import { mobileModeSwitchAtom } from "../atoms/Atoms";

function TopBar() {

  const mobileMode: boolean = useAtomValue(mobileModeSwitchAtom)

  console.log(mobileMode)



  if (mobileMode) {

    return (

      <div className="flex grow border-b-2 border-gray-400">
        <div className="lg:mx-12 flex grow justify-center">
          <div className="flex grow flex-col bg-orange-700" style={{ maxWidth: '1400px' }}>
            <div className="m-2">
              <div className="flex grow items-center justify-between">
                <div>
                  <div className="pr-3">ETSY</div>
                </div>
                <div className="flex flex-row">
                  <NotificationIcon icon={heart} />
                  <NotificationIcon icon={bell} />
                  <NotificationIcon icon={store} />
                  <NotificationIcon icon={account} />
                  <NotificationIcon icon={cart} />
                </div>
              </div>
            </div>
            <div className="mx-2 mb-2">
              <SearchBar disabled={!mobileMode} />
            </div>
          </div>
        </div>
      </div >
    );

  } else {

    return (
      <div className="flex grow border-b-2 border-gray-400">
        <div className="lg:mx-12 flex grow justify-center">
          <div className="flex grow flex-col bg-orange-700" style={{ maxWidth: '1400px' }}>
            <div className="my-2">
              <div className="flex grow items-center">
                <div className="pr-3">ETSY</div>
                <SearchBar disabled={mobileMode} />
                <NotificationIcon icon={heart} />
                <NotificationIcon icon={bell} />
                <NotificationIcon icon={store} />
                <NotificationIcon icon={account} />
                <NotificationIcon icon={cart} />
              </div>
            </div>
            <div className="mb-2">
              <Categories />
            </div>
          </div>
        </div>
      </div >
    );

  }



}

export default TopBar;