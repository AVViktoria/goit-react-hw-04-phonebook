import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <form>
      <div className="inputBox">
        <label className="inputLabel">
          Find contacts by name
          <input
            className="inputContent"
            type="text"
            value={value}
            onChange={onChange}
            name="filter"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Filter"
            required
          />
        </label>
      </div>
    </form>
  );
}
Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
