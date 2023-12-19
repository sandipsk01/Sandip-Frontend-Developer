// Details.js
import React from 'react';
import xcapsule from "./capsule.jpg"

function Details({ capsule, closeModal }) {
  return (
    <div className='flex flex-col items-center flex-wrap p-[1vw] pb-[2vw]'>
      <img className='w-[20vw] mb-[3vw]' src={xcapsule} alt='capsule'/>

      {Object.keys(capsule).map((key) => (
        <div key={key}>
          {key === "missions" ? (
            <div></div>
          ) : 
          (
            <div className='font-serif'>
              {key}: {capsule[key]}
            </div>
          )}
        </div>
      ))}
      
      <button  className='border border-blue-500 text-white bg-blue-500 mt-[1vh] py-1 w-20 rounded-md font-serif' onClick={closeModal}>Close</button>
    </div>
  );
}

export default Details;
