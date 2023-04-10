import { mainScreenSwitcherAtom, selectedItemIdAtom } from "../atoms/Atoms";
import { useAtom, useAtomValue } from 'jotai'
import HomePage from "./HomePage/HomePage";
import CategoryPage from "./CategoryPage/CategoryPage";
import SelectedItemPage, { ProductProps } from "./SelectedItem/SelectedItemPage";

import testItem from '../../testProps.json'

function MainScreen() {

    const [screenSwitcher, useScreenSwitcher] = useAtom(mainScreenSwitcherAtom)
    const selectedItem = useAtomValue(selectedItemIdAtom)

    const item: ProductProps = testItem.testItem
    //date was not provided but will need to be


    const screenSelector = () => {
        if (screenSwitcher === 'HomePage') {
            return <HomePage />
        } else if (screenSwitcher === 'CategoryPage') {
            return <CategoryPage />
        } else if (screenSwitcher === selectedItem) {
            return <SelectedItemPage {...item} />
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