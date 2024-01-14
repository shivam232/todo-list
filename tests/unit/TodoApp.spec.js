import { mount } from "@vue/test-utils";
import TodoApp from '../../src/components/TodoApp'


describe('Testing TodpApp Component', () => {
    it('should contain the todo items', () => {
        const wrapper = mount(TodoApp)
        const todo = wrapper.get('[data-test=todo]')
        expect(todo.text()).toBe('Learn Vue Testing')
    })
    it('should add new todo item', async () => {
        const wrapper = mount(TodoApp)
        expect(wrapper.findAll('[data-test=todo]')).toHaveLength(1)
        await wrapper.get("[data-test='new-todo']").setValue('New Todo');
        await wrapper.get('[data-test=form]').trigger('submit')
        expect(wrapper.findAll("[data-test='todo']")).toHaveLength(2)
    })
    it('On completion of the Todo item', async () =>{
        const wrapper = mount(TodoApp)
        await wrapper.get("[data-test='todo-checkbox1']").setValue(true);
        expect(wrapper.get("[data-test='todo']").classes()).toContain('completed-todo') 
    })
    it('Conditional rendering test case', () => {
        const wrapper = mount(TodoApp, {
            data(){
                return{
                    showProfile: true
                }
            }
        });

        expect(wrapper.find('#profile').text()).toBe('Profile')
    })
    it('Conditional rendering test case', () => {
        const wrapper = mount(TodoApp, {
            data(){
                return{
                    showProfile: true
                }
            }
        });

        expect(wrapper.find('#profile').exists()).toBe(true)
    })
})