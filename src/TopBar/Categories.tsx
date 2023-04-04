

function Categories() {

    const iconStyle = "m-3 w-6 h-6"

    const categoriesObject = [
        { name: 'Home Favorites' },
        { name: 'Jewelry & Accessories' },
        { name: 'Clothing & Shoes' },
        { name: 'Home & Living' },
        { name: 'Wedding & Party' },
        { name: 'Toys & Entertainment' },
        { name: 'Art & Collectiables' },
        { name: 'Craft Supplies' },
        { name: 'Gifts & Gift Cards' }
    ]

    return (
        <div className="bg-orange-800">
            <div className="flex justify-between" style={{ maxWidth: '1400px' }}>
                <>
                    {categoriesObject.map((category) => {
                        return (
                            <div className="text-center">{category.name}</div>
                        )
                    })}
                </>
            </div>
        </div >
    );
}

export default Categories;