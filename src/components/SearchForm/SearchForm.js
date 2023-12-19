import React, { useState, useContext } from 'react';
import { dataContext } from '../../context';

const SearchForm = () => {
  const { data, setFilteredData } = useContext(dataContext);
  const [filter, setFilter] = useState({
    status: '',
    originalLaunch: '',
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
        (filter.originalLaunch === '' || item.original_launch === filter.originalLaunch) &&
        (filter.type === '' || item.type === filter.type)
      );
    });

    // Now you can use the filteredData as needed
    console.log(filteredData);

    // Update the state with the filtered data
    setFilteredData(filteredData);
  };

  return (
    <div>
      <h2 className='font-bold text-xl mt-5'>SEARCH CAPSULES</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Status:
          <select
            name="status"
            value={filter.status}
            onChange={handleInputChange}
            className='border border-slate-950 m-4 rounded-md'
          >
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="retired">Retired</option>
            <option value="unknown">Unknown</option>
          </select>
        </label>
        <label>
          Original Launch:
          <input
            type="text"
            name="original_launch"
            value={filter.originalLaunch}
            onChange={handleInputChange}
            className='border border-slate-950 m-4 rounded-md'
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={filter.type}
            onChange={handleInputChange}
            className='border border-slate-950 m-4 rounded-md'
          />
        </label>
        <button type="button" onClick={filterData} className='border border-blue-500 text-white bg-blue-500 m-4 px-3 py-1 rounded-md'>
          Apply Filter
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
