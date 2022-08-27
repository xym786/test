import { mount, VueWrapper } from '@vue/test-utils';
import Demo from '@/widgets/demo/Demo.vue';

describe('Demo.vue', () => {
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    wrapper = mount(Demo);
  });
  it('There is a element for background', () => {
    expect(wrapper.find('.plate').exists()).toBeTruthy();
    wrapper.setProps({
      plate: 'abcd.png',
    });
    console.log('🚀 ~ it ~ wrapper.find(\'.plate\').attributes', wrapper.find('.plate').attributes());
  });
});
