// pages/fault/choice/choice.js
Page({
  /** 页面的初始数据*/
  data: {
    isShowFrom1: false,
    isShowFrom2: false,
    isShowFrom3: false,
    tool:[
      {
        Tid: 1,
        name: 'X形状活扳手',
        img: '../../../image/pic_160.png'
      },
      {
        Tid: 2,
        name: '呆扳手',
        img: '../../../image/pic_160.png'
      },
      {
        Tid: 3,
        name: '梅花扳手',
        img: '../../../image/pic_160.png'
      },
      {
        Tid: 4,
        name: '剪刀',
        img: '../../../image/pic_160.png'
      },
      {
        Tid: 5,
        name: '钳子',
        img: '../../../image/pic_160.png'
      },
      {
        Tid: 6,
        name: '锤子',
        img: '../../../image/pic_160.png'
      },
      {
        Tid: 7,
        name: '镊子',
        img: '../../../image/pic_160.png'
      },
      {
        Tid: 8,
        name: '胶水',
        img: '../../../image/pic_160.png'
      }
    ],
    selectAll: false,
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
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**全选*/
  selectAll: function() {
    var that = this;
    that.setData({
      selectAll: !that.data.selectAll
    })
    if (that.data.selectAll) {
      var arr = that.data.tool;
      var arr2 = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].checked == true) {
          arr2.push(arr[i]);
          console.log("ee" + arr2);
        } else {
          arr[i].checked = true;
          arr2.push(arr[i]);
          console.log(arr2);
        }
      }
      that.setData({
        tool: arr2,
      })
    }
  },

  /**取消勾选*/
  selectCancel: function() {
    var that = this;
    that.setData({
      selectAll: !that.data.selectAll
    })
    var arr = that.data.tool;
    var arr2 = [];
    console.log(arr2);
    for (var i = 0; i < arr.length; i++) {
      arr[i].checked = false;
      arr2.push(arr[i]);
    }
    that.setData({
      tool: arr2,
    })
  },

  /**抽屉原理展开*/
    showFrom:function(e) {
    var param = e.target.dataset.param;
    this.setData({
      isShowFrom1: param == 1 ? (!this.data.isShowFrom1) : false,
      isShowFrom2: param == 2 ? (!this.data.isShowFrom2) : false,
      isShowFrom3: param == 3 ? (!this.data.isShowFrom3) : false
    });
  },

  /**分配人员绑定*/
  distribution:function(){
    wx.navigateTo({
      url: '../personnel/personnel'
    })
  }
})
  
