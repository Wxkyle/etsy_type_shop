

import search from '../assets/search.png'
import React from "react";



const SearchBar: React.FC<Props> = () => {

    const iconStyle = "m-3 w-6 h-6";

    return (
        <div className="flex grow border-2 border-black rounded-full bg-yellow-200">
            <input className="flex w-max grow p-4 bg-transparent"></input>
            <button className="p-2 rounded-r-full hover:bg-yellow-300 border-black">
                <img src={search} className={iconStyle} />
            </button>
        </div>
    );

};

export default SearchBar;