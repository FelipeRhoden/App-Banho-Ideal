import React from "react";
import renderer from "react-test-renderer";

import Menu from './';

describe('<Menu />', function(){
    it('Deveria conter 3 props (m3, KHw, Watts)', ()=>{
        const menu = new Menu();

        expect(menu.props).toEqual(expect.objectContaining({
            m3: expect.anything(),
            KHw: expect.anything(),
            Watts: expect.anything(),
        }));
    });

    it('Deveria conter 6 elementos filhos', ()=>{
        const menu = renderer.create(<Menu />).toJSON();

        expect(menu.children.length).toBe(6);
    })
});