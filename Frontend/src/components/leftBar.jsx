import React, { useState } from 'react';
import SearchBar from './searchBar';
import Dropdown from './dropdown';
import '../index.css'

function LeftBar() {

    return <div className="bg-white shadow-md justify-center sticky px-4 w-3/12 h-screen">
                <SearchBar></SearchBar>
                <Dropdown></Dropdown>
            </div>


}

export default LeftBar;