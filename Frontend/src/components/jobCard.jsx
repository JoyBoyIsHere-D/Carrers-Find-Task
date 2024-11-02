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
                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                            </svg>
                            {job.companyName}
                        </span>
                        <span className="flex items-center">
                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M5.05 3.05a7 7 0 119.9 9.9A7 7 0 015.05 3.05zM10 8a2 2 0 100 4 2 2 0 000-4zm0 8a6 6 0 100-12 6 6 0 000 12z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            {job.location}
                        </span>
                        <span className="flex items-center">
                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V7H8a1 1 0 110-2h1V4a1 1 0 011-1zM3 5a1 1 0 100 2h1a1 1 0 110 2H3a1 1 0 100 2h1a1 1 0 110 2H3a1 1 0 100 2h1a1 1 0 110 2H3a1 1 0 100 2h14a1 1 0 100-2h-1a1 1 0 110-2h1a1 1 0 100-2h-1a1 1 0 110-2h1a1 1 0 100-2h-1a1 1 0 110-2h1a1 1 0 100-2H3z"
                                    clipRule="evenodd"
                                />
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
