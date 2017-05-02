import React from 'react';
import {shallow} from 'enzyme';
import Game from './game';

describe('<Game />', () => {
    it('Render without crashing', () => {
        shallow(<Game />);
    });

    it('Can start newGame', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({
            guesses: [1,2,3],
            feedback: 'Hot',
            correctAnswer: 34
        });
        wrapper.instance().newGame();
        expect(wrapper.state('guesses')).toEqual([]);
        expect(wrapper.state('feedback')).toEqual('Make your guess!');
    });

    it('Should give hot-cold feedback', () => {
        const wrapper = shallow(<Game />);
        wrapper.setState({correctAnswer: 60});

        wrapper.instance().guess(10);
        expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');

        wrapper.instance().guess(30);
        expect(wrapper.state('feedback')).toEqual('You\'re Cold...');

        wrapper.instance().guess(50);
        expect(wrapper.state('feedback')).toEqual('You\'re Warm');

        wrapper.instance().guess(59);
        expect(wrapper.state('feedback')).toEqual('You\'re Hot!');

        wrapper.instance().guess(60);
        expect(wrapper.state('feedback')).toEqual('You got it!');
    });

});