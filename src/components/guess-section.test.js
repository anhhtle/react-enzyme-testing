import React from 'react';
import {shallow} from 'enzyme';
import GuessSection from './guess-section';

describe('<GuessSection />', () => {
    it('Render without crashing', () => {
        shallow(<GuessSection />);
    });

    it('Should render feedback', () => {
        const feedback = "test feedback";
        const wrapper = shallow(<GuessSection feedback={feedback} />);
        expect(wrapper.contains(feedback)).toEqual(true);
    });
});