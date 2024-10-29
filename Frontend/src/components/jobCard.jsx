import React from 'react';

function JobCard() {
  return (
    <div className="max-w-5xl my-5   bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 p-6 ">
      {/* Job Title and Company */}
      <h2 className="text-xl font-semibold text-gray-900">
        Software Engineer, Google Cloud Computing, Cloud Learning Services
      </h2>
      <div className="flex items-center space-x-4 mt-2 text-gray-500">
        <span className="flex items-center">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
          </svg>
          Google
        </span>
        <span className="flex items-center">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 3.05a7 7 0 119.9 9.9A7 7 0 015.05 3.05zM10 8a2 2 0 100 4 2 2 0 000-4zm0 8a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
          Cambridge, MA, USA
        </span>
        <span className="flex items-center">
          <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V7H8a1 1 0 110-2h1V4a1 1 0 011-1zM3 5a1 1 0 100 2h1a1 1 0 110 2H3a1 1 0 100 2h1a1 1 0 110 2H3a1 1 0 100 2h1a1 1 0 110 2H3a1 1 0 100 2h14a1 1 0 100-2h-1a1 1 0 110-2h1a1 1 0 100-2h-1a1 1 0 110-2h1a1 1 0 100-2h-1a1 1 0 110-2h1a1 1 0 100-2H3z"
              clipRule="evenodd"
            />
          </svg>
          Mid
        </span>
      </div>

      {/* Minimum Qualifications */}
      <div className="mt-4">
        <h3 className="text-md font-semibold text-gray-700">Minimum qualifications</h3>
        <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
          <li>Bachelor’s degree or equivalent practical experience.</li>
          <li>
            2 years of experience with software development in one or more programming languages,
            or 1 year of experience with an advanced degree in an industry setting.
          </li>
          <li>
            2 years of experience with data structures or algorithms in either an academic or
            industry setting.
          </li>
          <li>Experience with programming in Python, Java, or Angular.</li>
        </ul>
      </div>

      {/* Learn More Button */}
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        Learn more
      </button>
    </div>
  );
}

export default JobCard;
