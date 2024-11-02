import React, { useState, useEffect } from 'react';
import axios from 'axios';

function JobCard() {
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/api/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    const handleLearnMoreClick = (jobId) => {
        setSelectedJobId(selectedJobId === jobId ? null : jobId);
    };

    return (
        <div>
            {jobs.map((job) => (
                <div key={job._id} className="w-[900px] my-5 bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 p-6">
                    <h2 className="text-xl font-semibold text-gray-900">
                        {job.jobTitle}
                    </h2>
                    <div className="flex items-center space-x-4 mt-2 text-gray-500">
                        <span className="flex items-center">
                            <svg className='mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="23" height="48" color="#000000" fill="none">
                                <path d="M2 22H22" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M18 9H14C11.518 9 11 9.518 11 12V22H21V12C21 9.518 20.482 9 18 9Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                <path d="M15 22H3V5C3 2.518 3.518 2 6 2H12C14.482 2 15 2.518 15 5V9" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                                <path d="M3 6H6M3 10H6M3 14H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M15 13H17M15 16H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M16 22L16 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            {job.companyName}
                        </span>
                        <span className="flex items-center">
                            <svg className='mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="23" height="48" color="#000000" fill="none">
                                <path d="M7 18C5.17107 18.4117 4 19.0443 4 19.7537C4 20.9943 7.58172 22 12 22C16.4183 22 20 20.9943 20 19.7537C20 19.0443 18.8289 18.4117 17 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M14.5 9C14.5 10.3807 13.3807 11.5 12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9Z" stroke="currentColor" stroke-width="1.5" />
                                <path d="M13.2574 17.4936C12.9201 17.8184 12.4693 18 12.0002 18C11.531 18 11.0802 17.8184 10.7429 17.4936C7.6543 14.5008 3.51519 11.1575 5.53371 6.30373C6.6251 3.67932 9.24494 2 12.0002 2C14.7554 2 17.3752 3.67933 18.4666 6.30373C20.4826 11.1514 16.3536 14.5111 13.2574 17.4936Z" stroke="currentColor" stroke-width="1.5" />
                            </svg>
                            {job.location}
                        </span>
                        <span className="flex items-center">
                            <svg className='mr-1' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="23" height="48" color="#000000" fill="none">
                                <path d="M7 17L7 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M12 17L12 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M17 17L17 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>
                            {job.experience}
                        </span>
                    </div>

                    <h3 className="text-md font-semibold mt-2 text-gray-700">Description</h3>
                    <p className="text-gray-600 space-y-1">
                        {job.description}
                    </p>

                    {selectedJobId === job._id && (
                        <div className="mt-4">
                            <h3 className="text-md font-semibold text-gray-700">Minimum qualifications</h3>
                            <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                                <li>{job.minimumQualifications}</li>
                            </ul>
                        </div>
                    )}

                    <button
                        onClick={() => handleLearnMoreClick(job._id)}
                        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        {selectedJobId === job._id ? "Show Less" : "Learn More"}
                    </button>
                </div>
            ))}
        </div>
    );
}

export default JobCard;
