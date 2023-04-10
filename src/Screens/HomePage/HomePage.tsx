import DisplayAllItems from "../ScreenParts/DisplayAllItems";
import photo from "../../assets/testPhotos/IMG_1791.jpg"
import { useAtomValue } from "jotai";
import { mobileModeSwitchAtom } from "../../atoms/Atoms";
import testItem from '../../../testProps.json'
import { ProductProps } from "../SelectedItem/SelectedItemPage";

function HomePage() {

    const mobileMode: boolean = useAtomValue(mobileModeSwitchAtom)

    const items: ProductProps[] = testItem.multipleItems
    //date was not provided but will need to be

    const isMobile = mobileMode ? " p-2" : ""

    return (
        <div className={"bg-yellow-300 flex grow flex-col" + isMobile}>
            <DisplayAllItems items={items} />
        </div>
    );
}

export default HomePage;