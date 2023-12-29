import { mount } from '@vue/test-utils'
import App from '@/App.vue'


describe('App.vue', () => {
  jest.mock('axios')

  it('Запрет ввода 0 делителем при выборе оператора /', async ()=>{
    
    const wrapper = mount(App,{
    })
    await wrapper.setData({
      operator:'/'
    })
    
    const input = wrapper.findComponent('.i2')
    const mockEvent = { key: '0', keyCode:48, preventDefault: jest.fn() };

    input.trigger('keypress',mockEvent)

    expect(mockEvent.preventDefault).toBeCalled();
  })

  it('Запрет ввода . и ,', async ()=>{
    
    const wrapper = mount(App,{
    })
    
    const input = wrapper.findComponent('.i2')

    let mockEvent = { key: '.', keyCode:46, preventDefault: jest.fn() };
    input.trigger('keypress',mockEvent)

    mockEvent.key = ',';
    mockEvent.keyCode=44;
    input.trigger('keypress',mockEvent)

    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(2);
  })

  it('Запрет ввода символов 8-9 для восьмеричной системы счисления', async ()=>{
    
    const wrapper = mount(App,{
    })
    await wrapper.setData({
      radix:'8'
    })
    const input1 = wrapper.findComponent('.i1')
    const input2 = wrapper.findComponent('.i2')

    let mockEvent = { key: '8', keyCode:56, preventDefault: jest.fn() };
    input1.trigger('keypress',mockEvent)

    mockEvent.key = '9';
    mockEvent.keyCode=57;
    input2.trigger('keypress',mockEvent)

    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(2);
  })

  it('Запрет ввода символов 2-9 для двоичной системы счисления', async ()=>{
    
    const wrapper = mount(App,{
    })
    await wrapper.setData({
      radix:'2'
    })
    const input1 = wrapper.findComponent('.i1')
    const input2 = wrapper.findComponent('.i2')

    let mockEvent = { key: '8', keyCode:56, preventDefault: jest.fn() };
    input1.trigger('keypress',mockEvent)

    mockEvent.key = '9';
    mockEvent.keyCode=57;
    input2.trigger('keypress',mockEvent)

    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(2);
  })

  it('Запрет ввода символов больше "F" для шестнадцатеричной системы счисления', async ()=>{
    
    const wrapper = mount(App,{
    })
    await wrapper.setData({
      radix:'2'
    })
    const input1 = wrapper.findComponent('.i1')
    const input2 = wrapper.findComponent('.i2')

    let mockEvent = { key: 'G', keyCode:71, preventDefault: jest.fn() };
    input1.trigger('keypress',mockEvent)

    
    input2.trigger('keypress',mockEvent)

    expect(mockEvent.preventDefault).toHaveBeenCalledTimes(2);
  })

  it("Проверка директивы окрашивания цвета", async () => {
    const changeColor = jest.fn();
    const wrapper = mount(App, {attachTo: document.body});
    await wrapper.setData({
      result: '5'
    });
    
    wrapper.vm.changeColorResult(wrapper.vm.result)
    
    console.log(wrapper.find('.resultCalc').attributes('style'))
    expect(wrapper.find('.resultCalc').attributes('style')).toBe('color: green;')

    await wrapper.setData({
      result: '0'
    });
    
    wrapper.vm.changeColorResult(wrapper.vm.result)
    
    console.log(wrapper.find('.resultCalc').attributes('style'))
    expect(wrapper.find('.resultCalc').attributes('style')).toBe('color: black;')

    await wrapper.setData({
      result: '-1'
    });
    
    wrapper.vm.changeColorResult(wrapper.vm.result)
    
    console.log(wrapper.find('.resultCalc').attributes('style'))
    expect(wrapper.find('.resultCalc').attributes('style')).toBe('color: red;')
  })

  it('Тестирование watch метода для приведения результата до сотых', async ()=>{
    
    const wrapper = mount(App,{
    })
    await wrapper.setData({
      result:'5'
    })
    


    expect(wrapper.vm.result).toBe('5.00');
  })
})
