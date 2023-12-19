import React, { useState, useContext } from 'react';
import { dataContext } from '../../context';

const SearchForm = () => {
  const { data, setFilteredData } = useContext(dataContext);
  const [filter, setFilter] = useState({
    status: '',
    original_launch: '',
    type: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const filterData = () => {
    // filteredData will contain the filtered array based on the conditions
    const filteredData = data.filter((item) => {
      return (
        (filter.status === '' || item.status === filter.status) &&
        (filter.original_launch === '' || item.original_launch === filter.original_launch) &&
        (filter.type === '' || item.type === filter.type)
      );
    });

    // Now you can use the filteredData as needed
    console.log(filteredData);

    // Update the state with the filtered data
    setFilteredData(filteredData);

    setFilter({
      status: '',
      original_launch: '',
      type: '',
    })
  };

  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>SEARCH CAPSULES</h2>
      
      <form onSubmit={(e) => e.preventDefault()}>
        <label className='inline-block font-semibold'>
          STATUS:
          <select
            name="status"
            value={filter.status}
            onChange={handleInputChange}
            className='border border-slate-950 m-[2vw] rounded-md font-normal'
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="retired">Retired</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
        <label className='inline-block font-semibold'>
          ORIGINAL LAUNCH:
          <input
            type="text"
            name="original_launch"
            value={filter.original_launch}
            onChange={handleInputChange}
            className='border border-slate-950 m-[2vw] rounded-md font-normal px-[0.5vw]'
          />
        </label>
        <label className='inline-block font-semibold'>
          TYPE:
          <input
            type="text"
            name="type"
            value={filter.type}
            onChange={handleInputChange}
            className='border border-slate-950 m-[2vw] rounded-md font-normal px-[0.5vw]'
          />
        </label>
        <button type="button" onClick={filterData} className='border border-blue-500 text-white bg-blue-500 m-[0.5vw] px-[1vw] py-[0.3vh] rounded-md hover:bg-blue-900 font-semibold'>
          APPLY
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
