Page({
  /** 页面的初始数据*/
  data: {
    list: [{
      id: 1,
      open: false
    }],
     showModal: false,
     distribution: [
      { id: 1, name: '吴欣阳' },
      { id: 2, name: '梅红牛' },
      { id: 3, name: '肖恩' },
      { id: 4, name: '王涛' },
      { id: 1, name: '吴欣阳' },
      { id: 2, name: '梅红牛' },
      { id: 3, name: '肖恩' },
      { id: 4, name: '王涛' },
      { id: 1, name: '吴欣阳' },
      { id: 2, name: '梅红牛' },
      { id: 3, name: '肖恩' },
      { id: 4, name: '王涛' },  
    ],
    isShowFrom1: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},
 
  /**抽屉原理展开*/
  showFrom: function (e) {
    var param = e.target.dataset.param;
    this.setData({
      isShowFrom1: param == 1 ? (!this.data.isShowFrom1) : false,
    });
  },

  /**分配人员弹框*/
   handle: function () {
    this.setData({
      showModal: true
    })
  },
  /**隐藏分配人员弹框*/
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },

})