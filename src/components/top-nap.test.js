import React from 'react';
import {shallow, mount} from 'enzyme';
import TopNav from './top-nav';

describe('<TopNav />', () => {
    it('Renders without crashing', () => {
        shallow(<TopNav />);
    });

    it('Should call onInfo on click', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onInfo={callback}/>);
        const what = wrapper.find('.what');
        what.simulate('click', {
            preventDefault() {}
        });
        expect(callback).toHaveBeenCalled();
    });

    it('Should call onNewGame on click', () => {
        const callback = jest.fn();
        const wrapper = shallow(<TopNav onNewGame={callback}/>);
        const newGame = wrapper.find('.new');
        newGame.simulate('click', {
            preventDefault(){}
        });
        expect(callback).toHaveBeenCalled();
    });
});