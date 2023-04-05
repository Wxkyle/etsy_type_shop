import { mainScreenSwitcher } from "../atoms/Atoms";
import { useAtom } from 'jotai'
import HomePage from "./HomePage/HomePage";

function MainScreen() {

    const [screenSwitcher, useScreenSwitcher] = useAtom(mainScreenSwitcher)


    const screenSelector = () => {
        if (screenSwitcher === 'HomePage') {
            return <HomePage />
        } else if (screenSwitcher === '') {
            return <div></div>
        }
    }

    return (
        <div className="bg-red-400 flex grow justify-center" >
            <div className="flex grow" style={{ maxWidth: '1400px' }}>
                {screenSelector()}
            </div>
        </ div>
    );
}

export default MainScreen;