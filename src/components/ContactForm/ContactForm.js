import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  //*  прописываем  внутри инпута   //
  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  //*  слушатель событий по кнопке  //
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  //*  очищаем   сбрасываем   форму  //
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="inputBox">
          <label className="inputLabel" htmlFor={this.nameInputId}>
            Name
            <input
              className="inputContent"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name"
              required
            />
          </label>
        </div>
        <div className="inputBox">
          <label className="inputLabel" htmlFor={this.numberInputId}>
            Number
            <input
              className="inputContent"
              type="tel"
              value={this.state.number}
              onChange={this.handleChange}
              id={this.numberInputId}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Number"
              required
            />
          </label>
        </div>
        <button className="inputButton" type="submit">
          {/* <span></span>
          <span></span>
          <span></span>
          <span></span> */}
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
