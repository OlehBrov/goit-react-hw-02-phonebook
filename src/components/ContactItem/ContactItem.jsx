export const ContactItem = (props) => {
  return (
    console.log('in list props', props),
    (
      <li key={props.id}>
        Name: {props.name} Phone: {props.number}
        <button type="button" onClick={() => props.children.onDeleteContact(props.id)}>
          Delete
        </button>
      </li>
    )
  );
};
