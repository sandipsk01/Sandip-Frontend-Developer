// Grid.js
import React, { useState, useEffect, useContext } from 'react';
import { dataContext } from '../../context';
import xcapsule from "./capsule.jpg";
import Details from './Details';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function Grid() {
  const { filteredData } = useContext(dataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [details, setDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const capsulesPerPage = 8;

  useEffect(() => {
    // Reset current page when filtered data changes
    setCurrentPage(1);
  }, [filteredData]);

  const indexOfLastCapsule = currentPage * capsulesPerPage;
  const indexOfFirstCapsule = indexOfLastCapsule - capsulesPerPage;
  const currentCapsules = filteredData.slice(indexOfFirstCapsule, indexOfLastCapsule);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getDetails = (capsule) => {
    setDetails(capsule);
    openModal();
  };

  return (
    <>
      <div className='flex flex-wrap justify-center cursor-pointer'>
        {currentCapsules.map((capsule) => (
          <div className='flex flex-col border-4' key={capsule.capsule_serial} onClick={() => getDetails(capsule)}>
            <img className='w-[24vw]' src={xcapsule} alt={capsule.capsule_serial} />
            <div className='w-[24vw] inline-block'>{capsule.capsule_serial}</div>
          </div>
        ))}
      </div>

      <div>
        {Array.from({ length: Math.ceil(filteredData.length / capsulesPerPage) }, (_, index) => (
          <button
            className={`border-2 h-[3vw] w-[3vw] m-1 border-blue-950 ${currentPage === index + 1 ? 'bg-blue-500' : ''}`}
            key={index}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Capsule Details"
      >
        {details && <Details capsule={details} closeModal={closeModal} />}
      </Modal>
    </>
  );
}

export default Grid;
