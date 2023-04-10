import { useAtom } from 'jotai';
import React from 'react';
import { mainScreenSwitcherAtom, selectedItemIdAtom } from '../../atoms/Atoms';
import { ProductProps } from '../SelectedItem/SelectedItemPage';
import photo from "../../assets/testPhotos/IMG_1791.jpg"


//this will become ProductProps

//pictures needs to be properly linked in testProps.json


const DisplayAllItems = (props: { items: ProductProps[] }) => {

    const { items } = props


    const [, useScreenSwitcher] = useAtom(mainScreenSwitcherAtom)
    const [, useSelecteditem] = useAtom(selectedItemIdAtom)

    const navigateToSelectedItem = (id: number) => {
        useScreenSwitcher(id)
        useSelecteditem(id)
    }

    return (
        <div className='mb-16'>
            <h2>Title</h2>
            <ul className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-6 justify-between'>
                {items?.map((props, index) => {

                    const {
                        id,
                        name,
                        price,
                        description,
                        stock,
                        pictures,
                        reviews,
                        category,
                        listingDate,
                    } = props

                    return (
                        <li onClick={() => { navigateToSelectedItem(id) }} key={index} className='relative flex grow'>
                            <img src={pictures[0] === "" ? photo : ""} alt={name} className='rounded-md w-full max-h-64 object-cover' />
                            <div className='flex grow justify-between absolute bottom-0 left-0 p-2'>
                                {/* <h3>{item.name}</h3> */}
                                <p className='bg-white rounded-full right-0 px-2 py-1'>${price}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default DisplayAllItems;