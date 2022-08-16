import React, { Component } from "react";
import PropTypes from 'prop-types';
import { ContactFormStyle, LabelForm, InputForm, ButtonForAdd } from "components/ContactForm/ContactForm.styled";

export class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };
    typeNewContact = (event) => {
        const { name, value } = event.currentTarget;
        this.setState({
            [name]: value,
        });
    };
    onSubmitForm = (event) => {
        event.preventDefault();
        const { addNewContact } = this.props;
        const { name, number } = this.state;
        addNewContact(name, number);
        this.reset();
    };
    reset = () => {
        this.setState({
        name: '',
        number: '',
        });
    };
    render() {
        const { name, number } = this.state;
        return (
            <ContactFormStyle onSubmit={this.onSubmitForm}>
                <LabelForm>Name
                    <InputForm
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={this.typeNewContact}
                    />
                </LabelForm>
                <LabelForm>Number
                    <InputForm
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={this.typeNewContact}
                    />
                </LabelForm>
                <ButtonForAdd type="submit">Add contact</ButtonForAdd>
            </ContactFormStyle>
        );
    };
};

ContactForm.propTypes = {
    addNewContact: PropTypes.func.isRequired,
};