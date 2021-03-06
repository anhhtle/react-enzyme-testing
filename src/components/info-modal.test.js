import React from 'react';
import {shallow} from 'enzyme';
import InfoModal from './info-modal';

describe('<InfoModal />', () => {
    it('Render without crashing', () => {
        shallow(<InfoModal />);
    });

    it('Should call onClose on click', () => {
        const callback = jest.fn();
        const wrapper = shallow(<InfoModal onClose={callback}/>);
        const link = wrapper.find('.close');
        link.simulate('click', {
            preventDefault(){}
        });
        expect(callback).toHaveBeenCalled();
    });
});