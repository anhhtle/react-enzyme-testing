import React from 'react';
import {shallow} from 'enzyme';
import GuessCount from './guess-count';

describe('<GuessCount />', () => {
    it('Render without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Should render the correct count', () => {
        const wrapper = shallow(<GuessCount count={4} />);
        expect(wrapper.contains(4)).toEqual(true);
    });

});