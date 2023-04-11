import { useAtom } from "jotai"
import { ProductProps } from "./SelectedItemPage"
import { mainScreenSwitcherAtom, selectedItemIdAtom } from "../../atoms/Atoms"
import photo from "../../assets/testPhotos/IMG_1791.jpg";

const SingleItem = (
    {
        id,
        name,
        price,
        description,
        stock,
        pictures,
        reviews,
        category,
        listingDate,
    }
        : ProductProps
) => {

    const [, useScreenSwitcher] = useAtom(mainScreenSwitcherAtom)
    const [, useSelecteditem] = useAtom(selectedItemIdAtom)

    const navigateToSelectedItem = (id: number) => {
        useScreenSwitcher(id)
        useSelecteditem(id)
    }

    // console.log('stuff ', pictures[0], photo)

    return (
        <li onClick={() => { navigateToSelectedItem(id) }} key={id} className='relative flex grow'>
            <img src={pictures[0] === "" ? photo : pictures[0]} alt={name} className='rounded-md w-full max-h-64 object-cover' />
            <div className='flex grow justify-between absolute bottom-0 left-0 p-2'>
                {/* <h3>{item.name}</h3> */}
                <p className='bg-white rounded-full right-0 px-2 py-1'>${price}</p>
            </div>
        </li>
    )
}

export default SingleItem