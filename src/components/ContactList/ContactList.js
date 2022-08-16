import PropTypes from 'prop-types';
import { ContactListStyle, ContactItem, ButtonForDelete } from "components/ContactList/ContactList.styled";

export const ContactList = ({ doFiltering, deleteContact }) => {
    const visibleContacts = doFiltering();
    return (
        <ContactListStyle>
            {visibleContacts.map(({id, name, number}) => {
                return (
                    <ContactItem key={id}>{name}: {number}
                        <ButtonForDelete type="button" onClick={() => {deleteContact(id)}}>Delete</ButtonForDelete>
                    </ContactItem>
                );
            })}
        </ContactListStyle>
    );
};

ContactList.propTypes = {
    doFiltering: PropTypes.func.isRequired,
    deleteContact: PropTypes.func.isRequired,
};