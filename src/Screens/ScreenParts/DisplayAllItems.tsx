import React from 'react';

export type StoreProduct = {
    photo: string;
    name: string;
    price: number;
};

type Props = {
    title: string;
    items: StoreProduct[];
};

const DisplayAllItems: React.FC<Props> = ({ title, items }) => {
    return (
        <div className='mb-16'>
            <h2>{title}</h2>
            <ul className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-6 justify-between'>
                {items.map((item, index) => (
                    <li key={index} className='relative flex grow'>
                        <img src={item.photo} alt={item.name} className='rounded-md w-full max-h-64 object-cover' />
                        <div className='flex grow justify-between absolute bottom-0 left-0 p-2'>
                            {/* <h3>{item.name}</h3> */}
                            <p className='bg-white rounded-full right-0 px-2 py-1'>${item.price}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DisplayAllItems;