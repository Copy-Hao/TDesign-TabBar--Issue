Component({
  properties: {
    width: String,
    height: String
  },
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      this.data.width = this.properties.width;
      this.data.height = this.properties.height;
    },
  },
  data: {
    // 这里是一些组件内部数据
    width: "",
    height: ""
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function () {
    },
  },
});
