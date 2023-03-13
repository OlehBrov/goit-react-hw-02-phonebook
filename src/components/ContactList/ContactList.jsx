import { Children, Component } from 'react';
import { ContactItem } from '../ContactItem/ContactItem'

export const ContactList = (props) => {  
console.log("Props in Cont List", props)
    return <ul>
          {props.children}
      </ul>;
  
}


