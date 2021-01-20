Component({ 
  options: { 
    multipleSlots: true // 在组件定义时的选项中启用多slot支持 
  }, 
  /** 
   * 组件的属性列表 
   * 用于组件自定义设置 
  */ 
  properties: {
    isHideLoadMore: { // 属性名 
      type: Boolean, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型） 
      value: false // 属性初始值（可选），如果未指定则会根据类型选择一个 
    }, 
  },
  
  /** 
   * 私有数据,组件的初始数据 
   * 可用于模版渲染 
   */ 
  data: { 
    isShow: false
  }, 
  /**
   * 组件的方法列表 
   * 更新属性和数据的方法与更新页面数据的方法类似 
  */ 
  methods: { 
    /** 
    * 公有方法 
    */
    // 一些方法 
    someMethod() { 
      this.setData({ 
        isShow: !this.data.isShow
      }) 
    }, 
    /** 
     * 内部私有方法建议以下划线开头 
     * triggerEvent 用于触发事件 
    */ 
    _cancelEvent() { //触发取消回调 
      
    }, 
  } 
})