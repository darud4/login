import "./ContactList.css";
import { Contact, ContactPropsType } from "../Contact/Contact";

export function ClassList({ contacts }: { contacts: ContactPropsType[] }) {
  return (
    <ul className="contact-list">
      {contacts.map(({ id, name, phone, email }: ContactPropsType) => (
        <Contact name={name} key={id} phone={phone} id={id} email={email} />
      ))}
    </ul>
  );
}
