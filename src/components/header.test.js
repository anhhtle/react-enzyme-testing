import React from 'react';
import {shallow} from 'enzyme';
import Header from './header';

describe('<Header />', () => {
    it('Render without crashing', () => {
        shallow(<Header />);
    });

    it('Should hides <InfoModal /> initially', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('InfoModal').exists()).toEqual(false);
    });

    it('Should show InfoModal when toggled', () => {
        const wrapper = shallow(<Header />);
        wrapper.instance().toggleInfoModal(true);
        expect(wrapper.find('InfoModal').exists()).toEqual(true);
    });
});