const app = getApp()
Component({
  data: {
    value: app.globalData.value,
    list: [
      { value: 'label_1', label: '首页', icon: 'home', url: '/pages/index/index' },
      { value: 'label_2', label: '商城', icon: 'app', url: '/pages/mall/index' },
      { value: 'label_3', label: '订单', icon: 'chat', url: '/pages/order/index' },
      { value: 'label_4', label: '我的', icon: 'user', url: '/pages/mine/index' },
    ],
  },
  attached: function () {
    this.setData({
      value: app.globalData.value
    })
  },
  methods: {
    onChange(e) {
      app.globalData.value = e.detail.value
      const array = this.data.list;
      const value = e.detail.value;
      array.forEach(element => {
        if (value === element.value) {
          const url = element.url;
          wx.switchTab({ url })
        }
      });
    },
  },
});
