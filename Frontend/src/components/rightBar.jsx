import React, { useState } from 'react';
import JobCard from './jobCard.jsx';
import '../index.css'


function RightBar(){

    return <div className='bg-gray-300 flex flex-col justify-center items-center ml-[24vw] w-10/12'>
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
        <JobCard></JobCard>
    </div>
}

export default RightBar;