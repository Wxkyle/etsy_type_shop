import { mainScreenSwitcher } from "../atoms/Atoms";
import { useAtom } from 'jotai'
import HomePage from "./HomePage/HomePage";
import CategoryPage from "./CategoryPage/CategoryPage";

function MainScreen() {

    const [screenSwitcher, useScreenSwitcher] = useAtom(mainScreenSwitcher)


    const screenSelector = () => {
        if (screenSwitcher === 'HomePage') {
            return <HomePage />
        } else if (screenSwitcher === 'CategoryPage') {
            return <CategoryPage />
        } else if (screenSwitcher === '') {
            return <div></div>
        }
    }

    return (
        <div className="bg-red-400 flex grow justify-center" >
            <div className="flex grow lg:mx-12" style={{ maxWidth: '1400px' }}>
                {screenSelector()}
            </div>
        </ div>
    );
}

export default MainScreen;