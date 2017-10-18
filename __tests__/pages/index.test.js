/* eslint-env jest */

import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { mountWithIntl } from '../../helpers/intl-enzyme-test-helper.js';
import createComponentWithIntl from '../../utils/createComponentWithIntl';

import App from '../../pages/index.js';

configure({adapter: new Adapter()});

describe('With Enzyme', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithIntl(<App/>);
  });

  it('App shows "Hello world!"', () => {
    expect(wrapper.find('p').text()).toEqual('Hello World!');
  });
});

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const component = createComponentWithIntl(<App/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
