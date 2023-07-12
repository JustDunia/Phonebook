import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles['contacts-list']}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles['contact-item']}>
          <span className={styles['contact-name']}>{name}</span>: {number}
          <button
            onClick={() => dispatch(deleteContact(id))}
            className={styles.btn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
