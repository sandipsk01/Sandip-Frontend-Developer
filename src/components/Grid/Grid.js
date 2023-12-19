import React, { useState, useContext } from 'react';
import { dataContext } from '../../context';
import xcapsule from "./capsule.jpg";

function Grid() {
  const { filteredData } = useContext(dataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const capsulesPerPage = 16;

  // Calculate the indexes of capsules to display on the current page
  const indexOfLastCapsule = currentPage * capsulesPerPage;
  const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
  const currentCapsules = filteredData.slice(indexOfFirstCapsule, indexOfLastCapsule);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <div className='flex flex-wrap justify-center'>
        {currentCapsules.map(capsule => (
          <div className='flex flex-col border-4' key={capsule.capsule_serial}>
            <img className='w-[24vw]' src={xcapsule} alt={capsule.capsule_serial} />
            <div className='w-[24vw] inline-block'>
              {capsule.capsule_serial}
            </div>
          </div>
        ))}
      </div>
      <div>
        {/* Pagination logic */}
        {Array.from({ length: Math.ceil(filteredData.length / capsulesPerPage) }, (_, index) => (
          <button className='border-2 h-[3vw] w-[3vw] m-1 border-blue-950' key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Grid;
