import React, {Component} from 'react';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import {defineMessages, FormattedMessage, injectIntl} from 'react-intl';

import FormInfo from './FormInfo';
import FormInput from './FormInput';
import SendButton from './SendButton';

const Form = styled.form`
  flex: 0 1 25rem;
  z-index: 1;
  background-color: orange;
  border-radius: .5rem;
  color: #222;
  padding: .5rem;
`;

const FormFooter = styled.div`
  text-align: center;
`;

const messages = defineMessages({
  subject_text: {
    id: 'portfolio.page.contact.form_input.helper_text.subject.text',
    defaultMessage: 'Please provide a subject for your message.',
  },
  subject_label: {
    id: 'portfolio.page.contact.form_input.helper_text.subject.label',
    defaultMessage: 'Subject',
  },
  subject_error: {
    id: 'portfolio.page.contact.form_input.helper_text.subject.error',
    defaultMessage: 'A subject is required.',
  },
  your_message_text: {
    id: 'portfolio.page.contact.form_input.helper_text.your_message.text',
    defaultMessage: 'Please add your message here.',
  },
  your_message_label: {
    id: 'portfolio.page.contact.form_input.helper_text.your_message.label',
    defaultMessage: 'Your message',
  },
  your_message_error: {
    id: 'portfolio.page.contact.form_input.helper_text.your_message.error',
    defaultMessage: 'A message is required.',
  },
  name_text: {
    id: 'portfolio.page.contact.form_input.helper_text.name.text',
    defaultMessage: 'Please add your name here.',
  },
  name_label: {
    id: 'portfolio.page.contact.form_input.helper_text.name.label',
    defaultMessage: 'Your name',
  },
  name_placeholder: {
    id: 'portfolio.page.contact.form_input.helper_text.name.placeholder',
    defaultMessage: '(e.g. John Doo)',
  },
  name_error: {
    id: 'portfolio.page.contact.form_input.helper_text.name.error',
    defaultMessage: 'Your name is required.',
  },
  email_text: {
    id: 'portfolio.page.contact.form_input.helper_text.email.text',
    defaultMessage: 'Please add your email address here.',
  },
  email_label: {
    id: 'portfolio.page.contact.form_input.helper_text.email.label',
    defaultMessage: 'Your email address',
  },
  email_placeholder: {
    id: 'portfolio.page.contact.form_input.helper_text.email.placeholder',
    defaultMessage: '(e.g. my@email.com)',
  },
  email_error: {
    id: 'portfolio.page.contact.form_input.helper_text.email.error',
    defaultMessage: 'Your email address is required.',
  },
});

class ContactForm extends Component {
  state = {
    field: {
      subject: '',
      message: '',
      name: '',
      email: '',
    },
    fieldError: {},
    _sendStatus: 'IDLE', // IDLE, SENDING, SUCCESS, ERROR
  };

  validateForm = () => {
    const field = this.state.field;
    const fieldError = this.state.fieldError;
    const errMessages = Object.keys(fieldError).filter((key) => fieldError[key]);

    if (!field.email) {
      return true;
    }

    if (!field.message) {
      return true;
    }

    if (!field.name) {
      return true;
    }

    if (!field.subject) {
      return true;
    }

    if (errMessages.length) {
      return true;
    }

    return false;
  };

  onInputChange = ({name, value, error}) => {
    const field = this.state.field;
    const fieldError = this.state.fieldError;

    field[name] = value;
    fieldError[name] = error;

    this.setState({field, fieldError, _sendStatus: 'IDLE'});
  };

  _checkResponseStatus = (response) => {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  };

  _parseJSON = (response) => {
    response.json();
  };

  onFormSubmit = (ev) => {
    ev.preventDefault();

    if (this.validateForm()) {
      return;
    }

    this.setState({_sendStatus: 'SENDING'});
    const field = this.state.field;

    fetch('https://meester-johan.info/title-request', {
      method: 'post',
      headers: new Headers(
          {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
      ),
      body: JSON.stringify({
        email: field.email,
        message: field.message,
        name: field.name,
        subject: field.subject,
      }),
    }).then(res => res.json()).then(data => {
      if (data.success) {
        this.setState({_sendStatus: 'SUCCESS'});
        console.log('Request succeeded with JSON response', data);
      } else {
        this.setState({_sendStatus: 'ERROR'});
        console.log('Request failed with JSON response', data);
        this.validateForm();
      }
    }).catch(error => {
      this.setState({_sendStatus: 'ERROR'});
      console.log(`Request failed with error: ${error}`);
    });
  };

  render() {
    const renderSendButton = () => {
      return {
        IDLE: <SendButton buttonState={'idle'} disabled={this.validateForm()}/>,
        SENDING: <SendButton buttonState={'sending'} disabled/>,
        SUCCESS: <SendButton buttonState={'success'} disabled/>,
        ERROR: <SendButton buttonState={'error'} disabled={this.validateForm()}/>,
      }[this.state._sendStatus];
    };

    return (
        <Form onSubmit={this.onFormSubmit}>
          <div>
            <div>
              <FormInfo/>
              <div>
                <FormInput
                    helperText={this.props.intl.formatMessage(messages.subject_text)}
                    label={this.props.intl.formatMessage(messages.subject_label)}
                    maxLength={50}
                    minLength={3}
                    name="subject"
                    onChange={this.onInputChange}
                    validate={val => (isLength(val, {min: 3, max: 50}))
                        ? false
                        : this.props.intl.formatMessage(messages.subject_error)}
                    value={this.state.field.subject}
                />
                <FormInput
                    helperText={this.props.intl.formatMessage(messages.your_message_text)}
                    label={this.props.intl.formatMessage(messages.your_message_label)}
                    maxLength={300}
                    minLength={5}
                    name="message"
                    onChange={this.onInputChange}
                    isTextArea={true}
                    validate={val => (isLength(val, {min: 5, max: 300}))
                        ? false
                        : this.props.intl.formatMessage(messages.your_message_error)}
                    value={this.state.field.message}
                />
                <FormInput
                    helperText={this.props.intl.formatMessage(messages.name_text)}
                    label={this.props.intl.formatMessage(messages.name_label)}
                    maxLength={50}
                    minLength={2}
                    name="name"
                    placeholder={this.props.intl.formatMessage(messages.name_placeholder)}
                    onChange={this.onInputChange}
                    validate={val => (isLength(val, {min: 2, max: 50}))
                        ? false
                        : this.props.intl.formatMessage(messages.name_error)}
                    value={this.state.field.name}
                />
                <FormInput
                    helperText={this.props.intl.formatMessage(messages.email_text)}
                    inputType="email"
                    label={this.props.intl.formatMessage(messages.email_label)}
                    name="email"
                    placeholder={this.props.intl.formatMessage(messages.email_placeholder)}
                    onChange={this.onInputChange}
                    validate={val => (isEmail(val)) ? false : this.props.intl.formatMessage(
                        messages.email_error)}
                    value={this.state.field.email}
                />
              </div>
              <FormFooter>
                {
                  renderSendButton()
                }
              </FormFooter>
            </div>
          </div>
        </Form>
    );
  }
}

export default injectIntl(ContactForm);
