import { useState } from 'react';
import PropTypes from 'prop-types';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const [number, setNumber] = useState('');
  // console.log(inputState);

  //   //*  прописываем  внутри инпута   //
  const handleChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;

      // this.setState({ [name]: value });
      // setName(evt.currentTarget.value);
    }
  };

  //   //*  слушатель событий по кнопке  //
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({ name, number });
    reset();
  };
  //   //*  очищаем   сбрасываем   форму  //
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputBox">
        <label className="inputLabel">
          Name
          <input
            className="inputContent"
            type="text"
            value={name}
            onChange={handleChange}
            // id={this.nameInputId}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name"
            required
          />
        </label>
      </div>
      <div className="inputBox">
        <label className="inputLabel">
          Number
          <input
            className="inputContent"
            type="tel"
            value={number}
            onChange={handleChange}
            // id={this.numberInputId}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Number"
            required
          />
        </label>
      </div>
      <button className="inputButton" type="submit">
        Add contact
      </button>
    </form>
  );
}
ContactForm.prototype = {
  onSubmit: PropTypes.func.isRequired,
};

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   //*  прописываем  внутри инпута   //
//   handleChange = evt => {
//     const { name, value } = evt.currentTarget;
//     this.setState({ [name]: value });
//   };

//   //*  слушатель событий по кнопке  //
//   handleSubmit = evt => {
//     evt.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   //*  очищаем   сбрасываем   форму  //
//   reset = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div className="inputBox">
//           <label className="inputLabel" htmlFor={this.nameInputId}>
//             Name
//             <input
//               className="inputContent"
//               type="text"
//               value={this.state.name}
//               onChange={this.handleChange}
//               id={this.nameInputId}
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name"
//               required
//             />
//           </label>
//         </div>
//         <div className="inputBox">
//           <label className="inputLabel" htmlFor={this.numberInputId}>
//             Number
//             <input
//               className="inputContent"
//               type="tel"
//               value={this.state.number}
//               onChange={this.handleChange}
//               id={this.numberInputId}
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Number"
//               required
//             />
//           </label>
//         </div>
//         <button className="inputButton" type="submit">
//           {/* <span></span>
//           <span></span>
//           <span></span>
//           <span></span> */}
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }
// export default ContactForm;
