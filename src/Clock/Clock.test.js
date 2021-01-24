import React from 'react';
import renderer from 'react-test-renderer'

import Clock from './';

describe('<Clock />', function(){
    it('Deveria ter 1 props (timer)', ()=>{
        const clock = new Clock();

        expect(clock.props).toEqual((expect.objectContaining({
            timer: expect.anything(),
        })));
    });
    
    it('Deveria renderizar corretamente', ()=>{
        const clock = renderer.create(<Clock />).toJSON();

        expect(clock).toMatchSnapshot();
    })
})