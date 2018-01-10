import React from 'react'
import { Welcome } from "./Welcome"

import { mount, shallow } from 'enzyme'

describe('Welcome', () => {
    it('should render Welcome using shallow', () => {
        const wrapper = shallow(<Welcome />)
        const title = wrapper.find('h1')
        expect(title.text()).toEqual('Welcome')
    })
    it('should render Welcome using mount', () => {
        const wrapper = mount(<Welcome />)
        const title = wrapper.find('h1')
        expect(title.text()).toEqual('Welcome')
    })
})