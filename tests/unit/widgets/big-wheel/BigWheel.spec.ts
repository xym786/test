import { mount, VueWrapper } from '@vue/test-utils';
import BigWheel from '@/widgets/big-wheel/BigWheel.vue';
import prizeData from '@/data/prizeData.json';

describe('big-wheel 部件', () => {
  // let wrapper: VueWrapper<any>;
  let wrapper: VueWrapper<any>;

  beforeAll(() => {
    wrapper = mount(BigWheel);
  });
  it('加载', () => {
    expect(wrapper.find('.big-wheel-widget').exists()).toBeTruthy();
  });

  it('有个正方形转盘，背景是给定的图片', () => {
    const platePic = 'abcd.png';

    wrapper.setProps({
      plate: platePic,
    }).then(() => {
      const plate = wrapper.find('.plate');
      expect(plate.exists()).toBeTruthy();
      // <div class="plate" :style="{width: width, height: height, backgroundImage: `url(${pic})`}"></div>
      console.log('🚀 ~ it ~ plate.attributes()', plate.attributes());
      const { style } = plate.attributes();
      // style: 'width: 300px; height: 300px; background-image: url(undefined);'
      const styles: any = {};
      style.split('; ').forEach((kv: string) => {
        const [k, v] = kv.split(': ');
        styles[k] = v;
      });
      console.log('🚀 ~ style.split ~ styles', styles);
      // const { width, height, backgroundImage } = plate.attributes().style;
      expect(styles.width).toEqual(styles.height);
      // 'background-image': 'url(undefined);'
      expect(styles['background-image']).toEqual(`url(${platePic});`);
      // <div class="plate" :style="{width: width, height: height}">
      //  <img :src="pic">
      // </div>
      // expect(plate.find('img').attributes().src).toEqual(platePic);
    });
  });

  it('绘制奖品', () => {
    wrapper.setProps({
      prizes: prizeData,
    });
    /**
     * <div class="plate">
     *  <div class="prize"
     *    :style="{
            transform: `rotate(${i / total}turn)`
          }">
     * ></div>
     * </div>
     */
    expect(wrapper.findAll('.prize').length).toBe(prizeData.length);

    // wrapper.findAll('.prize').forEach((prizeWrapper, index) => {
    // 获取style
    // 解析transform
    // 拿到角度
    // 断言比对 index / prizeData.length
    // });
  });
});
