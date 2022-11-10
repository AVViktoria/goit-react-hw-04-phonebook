import React from 'react';
import PropTypes from 'prop-types';

export default function ContactList({ contacts, onDeleteContactItem }) {
  return (
    <ul>
      {contacts.map(elt => {
        return (
          <li key={elt.id} className="listContacts">
            <span className="contact">
              {elt.name}: {elt.number}
            </span>
            <button
              className="listButton"
              type="button"
              id={elt.id}
              onClick={() => onDeleteContactItem(elt.id)}
            >
              x
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContactItem: PropTypes.func.isRequired,
};
