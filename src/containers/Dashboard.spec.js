import React from 'react'
import { Dashboard } from './Dashboard'

import { mount, shallow } from 'enzyme'

describe('Dashboard', () => {
    it('should render Welcome using shallow', () => {
        const wrapper = shallow(<Dashboard />)
        const title = wrapper.find('h1')
        expect(title.text()).toEqual('Welcome')
    })
    it('should render Welcome using mount', () => {
        const wrapper = mount(<Dashboard />)
        const title = wrapper.find('h1')
        expect(title.text()).toEqual('Welcome')
    })
})