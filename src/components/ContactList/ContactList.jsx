import { Children, Component } from 'react';
import { ContactItem } from '../ContactItem/ContactItem'

export const ContactList = (props) => {  
    return <ul>
          {props.children}
      </ul>;
  
}


