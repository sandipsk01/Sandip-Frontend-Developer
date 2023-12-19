// Details.js
import React from 'react';
import xcapsule from "./capsule.jpg"

function Details({ capsule, closeModal }) {
  return (
    <div className='flex flex-col flex-wrap w-[60vw] h-[80vh] p-[1vw] pb-[2vw]'>
      <img className='w-[20vw] mb-[3vw]' src={xcapsule} alt='capsule'/>

      {Object.keys(capsule).map((key) => (
        <div className='inline-block text-left w-[60vw]' key={key}>
          {key === "missions" ? (
            <div></div>
          ) : 
          (
            <>
              {key}: {capsule[key]}
            </>
          )}
        </div>
      ))}
      
      <button  className='border border-blue-500 text-white bg-blue-500 mt-[1vh] py-1 w-20 rounded-md' onClick={closeModal}>Close</button>
    </div>
  );
}

export default Details;
