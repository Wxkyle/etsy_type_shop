import DisplayAllItems, { StoreProduct } from "../ScreenParts/DisplayAllItems";
import photo from "../../assets/testPhotos/IMG_1791.jpg"
import { useAtomValue } from "jotai";
import { mobileModeSwitch } from "../../atoms/Atoms";

function CategoryPage() {

    const mobileMode: boolean = useAtomValue(mobileModeSwitch)

    const testItems: StoreProduct[] = [
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
            <DisplayAllItems title="Test Things" items={testItems} />
        </div>
    );
}

export default CategoryPage;