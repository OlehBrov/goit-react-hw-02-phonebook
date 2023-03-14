import { ContactItem } from 'components/ContactItem/ContactItem';
import { Component } from 'react';
export class ContactList extends Component {
  state = {
    contacts: this.props.contactList.contacts,
    filter: this.props.contactList.filter,
  };

  makeList = state => {
    // let contactlist = this.props.contactList.contacts;
    console.log('in list props contactlist', this.props.contactList.contacts);
    console.log('in list contactlist state', this.state);
    let searchQuery = this.props.contactList.filter.toString().toLowerCase();
    if (this.props.contactList.filter === '') {
      return this.props.contactList.contacts;
    } else {
      return (this.props.contactList.contacts.filter(person => {
        return person.name.toLowerCase().includes(searchQuery);
      }));
    }
  };
;
  render() {
    return (
      console.log('contactlist in return', this.makeList(this.state)),
      (
        <ul>
          {this.makeList(this.state).map(contact => (
            <ContactItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
            //   onDeleteContact={this.props}
              id={contact.id}
              >{ this.props}</ContactItem>
          ))}
        </ul>
      )
    );
  }
}

