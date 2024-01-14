import { mount } from "@vue/test-utils";
import Message from '../../src/components/Message'

describe('Testing Simple Message,vue Component', () => { 
    it('renders msg when props.msg passed', () => {
        const wrapper = mount(Message, {
            props: {msg: 'Hello Friends'}
        })
        expect(wrapper.text()).toContain('Hello Friends')
    })
 })