Page({
  data: {
    list: [
      { id: 1, open:false},
      { id: 2, open:false},
      { id: 3, open:false},
      ],  
  },

  /**生命周期函数--监听页面加载*/
  onLoad: function (options) {
    var that = this;
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },
  /**抽屉原理展开*/
  showFrom: function (e) {
    var id = e.currentTarget.id;
    var list =  this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
         list[i].open = !list[i].open
      } else{
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },

   /**下订单*/
   order:function(){
     wx.navigateTo({
       url: '../order/order',
     })
   }
})