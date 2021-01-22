import React from 'react';
import renderer from "react-test-renderer";

import ButtonToggle from './';

describe("<ButtonToggle />", function(){

    it('Deveria ter 3 props (trigger1, trigger2, Picture)', ()=>{
        const Button = new ButtonToggle();

        expect(Button.props).toEqual(expect.objectContaining({
            trigger1: expect.anything(),
            trigger2: expect.anything(),
            picture: expect.anything(),
        }));
    });

    it('Deveria renderizar corretamente', ()=>{
        const menu = renderer.create(<ButtonToggle />).toJSON();

        expect(menu).toMatchSnapshot();
    });
    
})