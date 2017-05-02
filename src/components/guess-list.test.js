import React from 'react';
import {shallow} from 'enzyme';
import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Render without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });

    it('Should renders list', () => {
        const lists = ['a','b', 'c'];
        const wrapper = shallow(<GuessList guesses={lists}/>);
        const childrens = wrapper.find('li');
        expect(childrens.length).toEqual(lists.length);
        lists.forEach((list, index) => {
            expect(childrens.at(index).text()).toEqual(list);
        });
    });
});