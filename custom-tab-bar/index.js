Component({
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', label: '首页', icon: 'home', url: '/pages/index/index' },
      { value: 'label_2', label: '商城', icon: 'app', url: '/pages/mall/index' },
      { value: 'label_3', label: '订单', icon: 'chat', url: '/pages/order/index' },
      { value: 'label_4', label: '我的', icon: 'user', url: '/pages/mine/index' },
    ],
  },

  methods: {
    onChange(e) {
      this.getTabBar().setData({
        value: e.detail.value
      });
      // this.setData({
      //   value: e.detail.value
      // });
      const array = this.data.list;
      const value = this.data.value;
      array.forEach(element => {
        if (value === element.value) {
          const url = element.url;
          wx.switchTab({
            url,
            success: function () { },
            fail: function () { },
            complete: function () { }
          })
        }
      });
    },
  },
});
