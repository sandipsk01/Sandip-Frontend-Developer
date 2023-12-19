import React from 'react';
import { useState } from 'react';
import xcapsule from "./capsule.jpg"
function Grid({data}) {
    const [currentPage, setCurrentPage] = useState(1);
    const capsulesPerPage = 16;

    // Calculate the indexes of capsules to display on the current page
    const indexOfLastCapsule = currentPage * capsulesPerPage;
    const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
    const currentCapsules = data.slice(indexOfFirstCapsule, indexOfLastCapsule);

    const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>
        <div className='flex flex-wrap justify-center'>
        {currentCapsules.map(capsule => (
            <div className='flex flex-col border-4'>
                <img className='w-[24vw]' src={xcapsule}/>
                <div className='w-[24vw] inline-block' key={capsule.capsule_serial} xs={6} md={3}>
                {capsule.capsule_serial}
                </div>
          </div>
        ))}
      </div>
      <div>
        {/* Pagination logic */}
        {Array.from({ length: Math.ceil(data.length / capsulesPerPage) }, (_, index) => (
          <button className='border-2 h-[3vw] w-[3vw] m-1 border-blue-950' key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Grid
