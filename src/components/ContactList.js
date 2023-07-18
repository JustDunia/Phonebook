import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Person } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem
          key={id}
          id={id}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => dispatch(deleteContact(id))}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={`${name}: ${number}`} />
        </ListItem>
      ))}
    </List>
  );
};
