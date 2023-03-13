import { ContactItem } from 'components/ContactItem/ContactItem';
import { Component } from 'react';
export class ContactList extends Component {
  state = {
    contacts: this.props.contactList.contacts,
    filter: this.props.contactList.filter,
  };

  makeList = state => {
    let contactlist = state.contacts;
    console.log('in list contactlist', contactlist);
    let searchQuery = this.props.contactList.filter.toString();
    if (this.props.contactList.filter === '') {
      return contactlist;
    } else {
      return (contactlist = state.contacts.filter(person => {
        return person.name.includes(searchQuery);
      }));
    }
  };
//   onDeleteContact = id => {
//     console.log('EVENT', id);
//     console.log('state in delet func', this.state);
//     this.setState(prevState => {
//       return prevState.contacts.filter(el => el.id !== id);
//     }, console.log('after delete', this.state));
//   };
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
