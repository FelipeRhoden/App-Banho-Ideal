import React from 'react';
import renderer from "react-test-renderer";

import ButtonToggle from './';

describe("<ButtonToggle />", function(){

    it('Deveria ter 2 props (trigger, Picture)', ()=>{
        const Button = new ButtonToggle();

        expect(Button.props).toEqual(expect.objectContaining({
            trigger: expect.anything(),
            picture: expect.anything(),
        }));
    });

    it('Deveria renderizar corretamente', ()=>{
        const menu = renderer.create(<ButtonToggle />).toJSON();

        expect(menu).toMatchSnapshot();
    });
    
})