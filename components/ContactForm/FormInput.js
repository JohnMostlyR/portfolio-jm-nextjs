import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {injectIntl, FormattedMessage} from 'react-intl';
import styled from 'styled-components';
import mq from '../../styles/templates/mediaQueries';
import typography, {baseFontRegular} from '../../styles/templates/typography';
import {svgToURL} from '../../styles/tools';

const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 1rem;
  overflow-x: hidden;
  position: relative;
  z-index: 1;

  &:not(:first-child) {
    padding-top: .5rem;
  }
`;

const Input = styled.input`
  margin-bottom: .5rem;
  width: 100%;
  border: 0;
  border-bottom: 1px dotted;
  font-size: 1rem;
  outline: none;
  padding: .5rem 1.5rem .5rem 0;
  background-color: orange;
  color: inherit;

  ${mq.m`
    background-image: url(${svgToURL(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" preserveAspectRatio="xMaxYMid"><path fill="#A36200" d="M19 30h-5a3.004 3.004 0 0 1-2.614-4.472 3 3 0 0 1-.62-4.528 2.987 2.987 0 0 1-.595-3H3c-1.654 0-3-1.346-3-3s1.346-3 3-3h12.334l-2.932-5.501A3.004 3.004 0 0 1 15.001 2c.824 0 1.592.327 2.163.921l.022.023 6.815 7.474V8.999a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v20a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-1.382l-4.553 2.276a1.006 1.006 0 0 1-.447.106zm8-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-8.236 0L24 25.382V13.387l-8.287-9.088a1.002 1.002 0 0 0-1.591 1.18c.01.017.02.033.029.051l3.732 7a1 1 0 0 1-.882 1.47h-14c-.551 0-1 .449-1 1s.449 1 1 1h10a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1h1a1 1 0 0 1 0 2c-.551 0-1 .449-1 1s.449 1 1 1h4.764z"/></svg>')});
    background-position: calc(100% + 1.5em) 50%;
    background-repeat: no-repeat;
    background-size: 1.5em;
    transition: background-position .3s;

    &:focus {
      background-position: center right;
      border-bottom-style: solid;
    }
  `}
`;

const Textarea = Input.withComponent('textarea').extend`
  ${baseFontRegular}
  ${typography.bodyCopy}
  appearance: none;
  height: 2em;
  overflow: hidden;
  resize: none;
`;

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 100%;
  font-size: 16px;
  height: 12px; // font size on focus
`;

const Placeholder = styled.span`
  display: inline-block;
  margin-left: .5em;
  opacity: ${props => props.hasFocus ? 1 : 0};
  transition: .2s opacity .2s ease-in;
`;

const LabelContent = styled.span`
  display: inline-block;
  position: absolute;
  top: 100%;
  transition: top .2s;
  
  ${props => ((props.hasFocus) ? `top: -8px; font-size: 12px;` : '')}
`;

const ErrorMessage = styled.span`
  display: none;
  color: red;
  font-size: 12px;

  ${props => props.showError ? `display: inline; margin-right: .5em;` : ''}
`;

const HelperText = styled.span`
  font-size: 12px;
`;

class FormInput extends Component {
  static propTypes = {
    helperText: PropTypes.string,
    inputType: PropTypes.string,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    isTextArea: PropTypes.bool,
    validate: PropTypes.func,
    value: PropTypes.string,
  };

  static defaultProps = {
    inputType: 'text',
    isTextArea: false,
  };

  state = {
    value: this.props.value,
    error: false,
    _hasFocus: false,
    _height: '',
  };

  componentWillReceiveProps(update) {
    this.setState({value: update.value});
  }

  onChange = (ev) => {
    const value = ev.target.value;
    let _height = '';

    if (this.textAreaElement) {
      if (this.textAreaElement.scrollHeight > this.textAreaElement.clientHeight) {
        _height = this.textAreaElement.scrollHeight;
      } else {
        _height = this.textAreaElement.clientHeight;
      }
    }

    this.setState({value, _height});
  };

  onBlur = (ev) => {
    const name = this.props.name;
    const value = ev.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;
    const _hasFocus = false;

    this.setState({value, error, _hasFocus});

    this.props.onChange({name, value, error});
  };

  onFocus = () => {
    this.setState({_hasFocus: true,});
  };

  setFocus = (ev) => {
    if (this.inputElement) {
      this.inputElement.focus();
    } else if (this.textAreaElement) {
      this.textAreaElement.focus();
    }
  };

  render() {
    const renderInput = () => (
        <Input
            type={this.props.inputType}
            name={this.props.name}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            value={this.state.value}
            innerRef={el => this.inputElement = el}
        />
    );

    const renderTextArea = () => (
        <Textarea
            style={{height: this.state._height}}
            name={this.props.name}
            onBlur={this.onBlur}
            onChange={this.onChange}
            onFocus={this.onFocus}
            value={this.state.value}
            innerRef={el => this.textAreaElement = el}
        />
    );

    const renderHelperText = () => {
      if (!this.props.helperText) return '';

      let helperTextRange = '';

      if (this.props.minLength || this.props.maxLength) {
        helperTextRange =
            <FormattedMessage
                id={'portfolio.page.contact.form_input.helper_text.range'}
                defaultMessage='Should be between {minLength, number} and {maxLength, number} characters. Is now: {count, number}'
                values={{
                  minLength: this.props.minLength,
                  maxLength: this.props.maxLength,
                  count: this.state.value.length,
                }}
            />;
      }

      if (this.state._hasFocus || this.state.error || !this.state.value) {
        return (<span>{this.props.helperText}&nbsp;{helperTextRange}</span>);
      } else if (!this.state.error) {
        return (
            <FormattedMessage
                id='portfolio.page.contact.form_input.helper_text.valid'
                defaultMessage='Thanks!'
            />
        );
      }

      return '';
    };

    const hasFocusOrValue = (this.state._hasFocus || this.state.value);

    return (
        <InputGroup>
          <Label
              htmlFor="name"
              onClick={this.setFocus}
          >
            <LabelContent
                hasFocus={hasFocusOrValue}>{this.props.label}<Placeholder
                hasFocus={hasFocusOrValue}><i>{this.props.placeholder}</i></Placeholder></LabelContent>
          </Label>
          {(this.props.isTextArea) ? renderTextArea() : renderInput()}
          <div>
            <ErrorMessage
                showError={(!this.state._hasFocus &&
                    this.state.error)}>{`${this.state.error} `}</ErrorMessage>
            <HelperText>{renderHelperText()}</HelperText>
          </div>
        </InputGroup>
    );
  }
}

export default injectIntl(FormInput);
