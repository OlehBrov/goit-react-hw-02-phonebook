import { Formik, Field, Form } from 'formik';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleSubmit = (values, {resetForm}) => {
      console.log('ContactForm values', resetForm)
      this.props.addContact(this.state);
     this.setState({ name: '', number: '' });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Formik
       initialValues={{ name: '', number: '' }}
        onSubmit={this.handleSubmit}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field
            id="name"
            name="name"
            placeholder="Enter name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="number">Phone Number</label>
          <Field
            id="number"
            name="number"
            placeholder="Enter phone number"
            value={this.state.number}
            onChange={this.handleChange}
          />

          <button type="submit">Add to contacts</button>
        </Form>
      </Formik>
    );
  }
}
