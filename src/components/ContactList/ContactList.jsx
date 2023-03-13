import { ContactItem } from 'components/ContactItem/ContactItem';
import { Component } from 'react';
export class ContactList extends Component {
  state = {
    contacts: this.props.contactList.contacts,
    filter: this.props.contactList.filter,
  };

  makeList = state => {
    console.log('makeList', this.props.contactList.filter);
    let contactlist = state.contacts;
    console.log(' let contactlist', contactlist);
    let searchQuery = this.props.contactList.filter.toString();
    if (this.props.contactList.filter === '') {
      console.log('state in IF', state.contacts);
      return contactlist;
    } else {
      return (contactlist = state.contacts.filter(person => {
        return person.name.includes(searchQuery);
      }));
    }
  };
  render() {
    return (
      <ul>
        {this.makeList(this.state).map(contact => (
          <ContactItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
          ></ContactItem>
        ))}
      </ul>
    );
  }
}

// data
//     .filter((item) => {return (
//         item.country.toLowerCase().includes(search_term) ||
//         item.name.toLowerCase().includes(search_term)
//       );
//     })
//     .forEach((e) => {
//       const li = document.createElement("li");
//       li.innerHTML = `<i>Name:</i> ${e.name}  || <i>Country:</i> ${e.country}`;
//       results.appendChild(li);
//     });
