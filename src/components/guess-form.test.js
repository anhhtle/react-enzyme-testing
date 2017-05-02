import React from 'react';
import {shallow, mount} from 'enzyme';
import GuessForm from './guess-form';

describe('<GuessForm />', () => {
    it('Render without crashing', () => {
        shallow(<GuessForm />);
    });

    it('Should run onGuess callback on submit', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onGuess={callback}/>);
        const inputValue = 10;
        wrapper.find('.text').node.value = inputValue;
        wrapper.simulate('submit');
        expect(callback).toHaveBeenCalledWith(inputValue.toString());
        // reset input after form submit
        expect(wrapper.find('.text').node.value).toEqual('');
    });

});
