import { useAtom, useAtomValue } from 'jotai';
import { mainScreenSwitcherAtom, selectedCategoryPageAtom, selectedItemIdAtom } from "../atoms/Atoms";
import CategoryPage from "./CategoryPage/CategoryPage";
import HomePage from "./HomePage/HomePage";
import SelectedItemPage, { ProductProps } from "./SelectedItem/SelectedItemPage";


import testItem from '../../testProps.json';

const RoutingScreen: React.FC = () => {

    const [screenSwitcher, useScreenSwitcher] = useAtom(mainScreenSwitcherAtom)
    const selectedItem = useAtomValue(selectedItemIdAtom)
    const selectedCategoryPage = useAtomValue(selectedCategoryPageAtom)

    const item: ProductProps = testItem.testItem
    // date was not provided but will need to be


    const screenSelector = () => {
        if (screenSwitcher === 'HomePage') {
            return <HomePage />
        } else if (screenSwitcher === selectedCategoryPage) {
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

export default RoutingScreen;