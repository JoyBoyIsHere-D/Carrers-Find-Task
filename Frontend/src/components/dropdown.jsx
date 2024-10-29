import React, { useState } from 'react';
import SearchBar from './searchBar';

import '../index.css'

function Dropdown({ label, options }) {
    const [isOpenLocation, setisOpenLocation] = useState(false);
    const [isOpenExperience, setIsOpenExperience] = useState(false);
    const [isOpenJobType, setIsOpenJobType] = useState(false);
    const [isOpenCompany, setIsOpenCompany] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdown1 = () => {
        setisOpenLocation(!isOpenLocation);
    };
    const toggleDropdown2 = () => {
        setIsOpenExperience(!isOpenExperience);
    };
    const toggleDropdown3 = () => {
        setIsOpenJobType(!isOpenJobType);
    };
    const toggleDropdown4 = () => {
        setIsOpenCompany(!isOpenCompany);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setisOpenLocation(false); // Close dropdown after selection
    };

    return (
        <div className="relative flex-col  text-left w-full max-w-s">

            {!isOpenLocation && <button
                onClick={toggleDropdown1}
                className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-md shadow-sm my-2 px-4 py-4 text-gray-700 focus:outline-none  "
            >
                {selectedOption || label}
                <h2>Location</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="28" color="#000000" fill="none">
                    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>}
            {isOpenLocation && < >
                <div className=" w-full flex-col justify-between items-center bg-white border border-gray-300 rounded-md shadow-sm my-2 px-4 py-4 text-gray-700 focus:outline-none ">
                    <button
                        onClick={toggleDropdown1}
                        className="w-full flex justify-between items-center  px-4 py-2 text-gray-700 focus:outline-none  "
                    >
                        {selectedOption || label}
                        <h2>Location</h2>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="28" color="#000000" fill="none">
                            <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <SearchBar placeholder="Location"></SearchBar>
                    <div class="flex items-center space-x-2 ml-2">
                        <input
                            type="checkbox"
                            id="remote"
                            name="remote"
                            value="Remote"
                            class="h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer "
                        />
                        <label for="remote" class="text-gray-700 cursor-pointer select-none">  
                            Remote
                        </label>
                    </div>
                </div></>}
            {/* Company Name */}
            {!isOpenCompany && <button
                onClick={toggleDropdown4}
                className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-md shadow-sm my-2 px-4 py-4 text-gray-700 focus:outline-none  "
            >
                {selectedOption || label}
                <h2>Company Name</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="28" color="#000000" fill="none">
                    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>}
            {isOpenCompany && < >
                <div className=" w-full flex-col justify-between items-center bg-white border border-gray-300 rounded-md shadow-sm my-2 px-4 py-4 text-gray-700 focus:outline-none ">
                    <button
                        onClick={toggleDropdown4}
                        className="w-full flex justify-between items-center  px-4 py-2 text-gray-700 focus:outline-none  "
                    >
                        {selectedOption || label}
                        <h2>Company Name</h2>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="28" color="#000000" fill="none">
                            <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <SearchBar placeholder="Location"></SearchBar>
                </div></>}
            {/* Experience */}
            {!isOpenExperience && <button
                onClick={toggleDropdown2}
                className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-md shadow-sm my-2 px-4 py-4 text-gray-700 focus:outline-none "
            >
                {selectedOption || label}
                <h2>Experience</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="28" color="#000000" fill="none">
                    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>}

            {isOpenExperience && < >
                <div className=" w-full flex-col justify-between items-center bg-white border border-gray-300 rounded-md shadow-sm my-2 px-4 py-4 text-gray-700 focus:outline-none  ">
                    <button
                        onClick={toggleDropdown2}
                        className="w-full flex justify-between items-center  px-4 py-2 text-gray-700 focus:outline-none  "
                    >
                        {selectedOption || label}
                        <h2>Experience</h2>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="28" color="#000000" fill="none">
                            <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <hr />
                    <div className="grid  grid-cols-2 items-center space-x-2 ml-2 mt-2">
                        <div className='ml-2 flex items-center m-1'><input
                            type="checkbox"
                            id="Intern"
                            name="Intern"
                            value="Intern"
                            class="h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer mr-2 "
                        />
                        <label for="Intern" class="text-gray-700 cursor-pointer select-none">  
                            Intern
                        </label></div>
                        <div className='ml-2 flex items-center m-1'><input
                            type="checkbox"
                            id="early"
                            name="early"
                            value="Early"
                            class="h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer mr-2 "
                        />
                        <label for="early" class="text-gray-700 cursor-pointer select-none">  
                             Entry Level
                        </label></div>
                        <div className='ml-2 flex items-center m-1'><input
                            type="checkbox"
                            id="mid"
                            name="mid"
                            value="Mid"
                            class="h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer mr-2 "
                        />
                        <label for="mid" class="text-gray-700 cursor-pointer select-none">  
                             Mid
                        </label></div>
                        <div className='ml-2 flex items-center m-1'><input
                            type="checkbox"
                            id="advanced"
                            name="advanced"
                            value="Advanced"
                            class="h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer mr-2 "
                        />
                        <label for="advanced" class="text-gray-700 cursor-pointer select-none">  
                             Senior
                        </label></div>
                        <div className='ml-2 flex items-center m-1'><input
                            type="checkbox"
                            id="director"
                            name="director"
                            value="Director"
                            class="h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer mr-2 "
                        />
                        <label for="director" class="text-gray-700 cursor-pointer select-none">  
                             Director
                        </label></div>
                        
                    </div>
                </div></>}
            {/* Job Types */}
            {!isOpenJobType && <button
                onClick={toggleDropdown3}
                className="w-full flex justify-between items-center bg-white border border-gray-300 rounded-md shadow-sm px-4 py-4 my-2 text-gray-700 focus:outline-none  "
            >
                {selectedOption || label}
                <h2>Job Type</h2>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="28" color="#000000" fill="none">
                    <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>}

            {isOpenJobType && < >
                <div className=" w-full flex-col justify-between items-center bg-white border border-gray-300 rounded-md shadow-sm px-4 py-4 my-2 text-gray-700 focus:outline-none ">
                    <button
                        onClick={toggleDropdown3}
                        className="w-full flex justify-between items-center  px-4 py-2 text-gray-700 focus:outline-none  "
                    >
                        {selectedOption || label}
                        <h2>Job Types</h2>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="28" color="#000000" fill="none">
                            <path d="M17.9998 15C17.9998 15 13.5809 9.00001 11.9998 9C10.4187 8.99999 5.99985 15 5.99985 15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <hr />
                    <div className="grid  grid-cols-2 items-center space-x-2 ml-2 mt-2">
                        <div className='ml-2 flex items-center m-1'><input
                            type="checkbox"
                            id="Intern2"
                            name="Intern"
                            value="Intern"
                            class="h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer mr-2 "
                        />
                        <label for="Intern2" class="text-gray-700 cursor-pointer select-none">  
                            Intern
                        </label></div>
                        <div className='ml-2 flex items-center m-1'><input
                            type="checkbox"
                            id="full-time"
                            name="full-time"
                            value="Full Time"
                            class="h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer mr-2 "
                        />
                        <label for="full-time" class="text-gray-700 cursor-pointer select-none">  
                             Full Time
                        </label></div>
                        <div className='ml-2 flex items-center m-1'><input
                            type="checkbox"
                            id="part-time"
                            name="part-time"
                            value="Part Time"
                            class="h-4 w-4 text-blue-600 border-gray-300 rounded cursor-pointer mr-2 "
                        />
                        <label for="part-time" class="text-gray-700 cursor-pointer select-none">  
                             Part Time
                        </label></div>
                        
                        
                        
                    </div>
                    
                </div></>}

        </div>
    );
}

export default Dropdown;
