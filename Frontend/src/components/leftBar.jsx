import React, { useState } from 'react';
import SearchBar from './searchBar';
import Dropdown from './dropdown';
import '../index.css'

function LeftBar() {

    return <div className="bg-white shadow-md justify-center h-[91%] fixed overflow-y-auto px-4 w-1/4 ">
                <SearchBar placeholder='Search your Job Profile'></SearchBar>
                <Dropdown></Dropdown>
            </div>


}

export default LeftBar;