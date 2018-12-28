import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import PlayerList from '../components/PlayerList';

configure({adapter: new Adapter()});
it('render', () => {
  const wrapper = shallow(<PlayerList players={[]} actions={{}}/>);
  const welcome = <h2>Welcome to React</h2>;
  expect(wrapper.contains(welcome)).toEqual(true);
});