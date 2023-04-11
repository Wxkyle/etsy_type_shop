import { ProductProps } from '../SelectedItem/SelectedItemPage';
import SingleItem from '../SelectedItem/SingleItem';

const DisplayAllItems = (props: { items: ProductProps[] }) => {

    const { items } = props

    //pictures needs to be properly linked in testProps.json

    return (
        <div className='mb-16'>
            <h2>Title</h2>
            <ul className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-6 justify-between'>
                {items?.map((item: ProductProps) => {

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
                    } = item

                    return (
                        <SingleItem {...item} />
                    )
                })}
            </ul>
        </div>
    );
};

export default DisplayAllItems;