
const imageCdn = 'https://tdesign.gtimg.com/miniprogram/images';
const swiperList = [
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
];
//swiper
Component({
  data: {
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
    value: 'label_1',
    list: [
      { value: 'label_1', label: '首页', icon: 'home' },
      { value: 'label_2', label: '应用', icon: 'app' },
      { value: 'label_3', label: '聊天', icon: 'chat' },
      { value: 'label_4', label: '我的', icon: 'user' },
    ],
  },
  methods: {
    onChange(e) {
      this.setData({
        value: e.detail.value,
      });
    },
  },
});

