import React from "react";
import renderer from "react-test-renderer";

import Menu from './';

describe('<Menu />', function(){
    it('Deveria conter 6 props (m3, m3OnChange, KHw, KHwOnChange, Watts, WattsOnChange)', ()=>{
        const menu = new Menu();

        expect(menu.props).toEqual(expect.objectContaining({
            m3: expect.anything(),
            m3OnChange: expect.anything(),
            KHw: expect.anything(),
            KHwOnChange: expect.anything(),
            Watts: expect.anything(),
            WattsOnChange: expect.anything(),
        }));
    });

    it('Deveria renderizar corretamente', ()=>{
        const menu = renderer.create(<Menu />).toJSON();

        expect(menu).toMatchSnapshot();
    })
});