import DisplayAllItems from "../ScreenParts/DisplayAllItems";
import photo from "../../assets/testPhotos/IMG_1791.jpg"
import { useAtomValue } from "jotai";
import { mobileModeSwitchAtom } from "../../atoms/Atoms";
import { ProductProps } from "../SelectedItem/SelectedItemPage";

function CategoryPage() {

    const mobileMode: boolean = useAtomValue(mobileModeSwitchAtom)

    //display all items based on category

    //these need to be changed to product props
    const testItems: ProductProps[] = [
        {
            photo: photo,
            name: 'thing',
            price: 9.99,
        },
        {
            photo: photo,
            name: 'thing',
            price: 9.99,
        },
        {
            photo: photo,
            name: 'thing',
            price: 9.99,
        },
    ]

    const isMobile = mobileMode ? " p-2" : ""

    return (
        <div className={"bg-yellow-300 flex grow flex-col" + isMobile}>
            <DisplayAllItems items={testItems} />
        </div>
    );
}

export default CategoryPage;