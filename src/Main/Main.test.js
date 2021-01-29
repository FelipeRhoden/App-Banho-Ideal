import React from 'react';
import renderer from 'react-test-renderer';

import Main from './';

describe('<Main />', function(){
    it('Deveria conter os states (timer, m3, KHw, Watts, showMenu, water, ligth, triggerStart, triggerMenu)', ()=>{
        const main = new Main();

        expect(main.state).toEqual(expect.objectContaining({
            timer: expect.anything(),
            m3: expect.anything(),
            KHw: expect.anything(),
            Watts: expect.anything(),
            showMenu: expect.anything(),
            water: expect.anything(),
            ligth: expect.anything(),
            triggerStart : expect.anything(),
            triggerMenu : expect.anything(),
        }));
    });

    it('Deveria renderizar corretamente', ()=>{
        const main = renderer.create(<Main />).toJSON();

        expect(main).toMatchSnapshot();
    })

})