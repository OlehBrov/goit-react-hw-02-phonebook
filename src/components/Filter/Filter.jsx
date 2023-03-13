import { Form, Formik, Field } from 'formik';
import { Component } from 'react';

export class Filter extends Component {
  state = {
    filter: '',
  };
  handleChange = e => {
     this.setState(
      { filter: e.target.value },
      this.props.filterContacts(e.target.value)
    );


  };
  render() {
    return (
      <Formik initialValues={{ filter: '' }}>
        <Form>
          <label htmlFor="searchfilter"></label>
          <Field
            id="searchfilter"
            filter="filter"
            placeholder="Search contact"
            value={this.state.filter}
            onChange={this.handleChange}
          />
        </Form>
      </Formik>
    );
  }
}
