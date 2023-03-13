export const ContactItem = (props) => {
    console.log('ContactItem', props)
    return <li key={props.id}>Name{props.name} Phone: {props.number }</li>
}
