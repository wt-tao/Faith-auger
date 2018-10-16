// pages/warehouse/orthopaedic/accessoriesEdit/accessoriesEdit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    startX: 0, //开始坐标
    startY: 0,
    value: 1,
    tool: [{
        Tid: 1,
        name: 'X形状活扳手',
        img: '../../../../image/pic_160.png'
      },
      {
        Tid: 2,
        name: '呆扳手',
        img: '../../../../image/pic_160.png'
      },
      {
        Tid: 3,
        name: '梅花扳手',
        img: '../../../../image/pic_160.png'
      },
      {
        Tid: 4,
        name: '剪刀',
        img: '../../../../image/pic_160.png'
      },
    ],
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
  /**加减数量 */
  editChange({
    detail
  }) {
    this.setData({
      value: detail.value
    })
  },

  /**手指刚放到屏幕触发*/
  touchStart: function(e) {
    this.data.tool.forEach(function(v, i) {
      if (v.isTouchMove) //只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      tool: this.data.tool
    })
  },

  /**触摸时触发，手指在屏幕上每移动一次，触发一次*/
  touchMove: function(e) {
    var that = this,
      index = e.currentTarget.dataset.index, //当前索引
      startX = that.data.startX, //开始X坐标
      startY = that.data.startY, //开始Y坐标
      touchMoveX = e.changedTouches[0].clientX, //滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY, //滑动变化坐标
      //获取滑动角度
      angle = that.angle({
        X: startX,
        Y: startY
      }, {
        X: touchMoveX,
        Y: touchMoveY
      });

    that.data.tool.forEach(function(v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      tool: that.data.tool
    })
  },

  /** 计算滑动角度*/
  angle: function(start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },

  /**删除绑定*/
  del: function(e) {
    var that = this
    wx.showModal({
      title: '是否要删除该配件',
      cancelText: "否",
      confirmText: "是",
      success: function(res) {
        console.log(res.confirm);
        if (res.confirm == true) {
          that.data.tool.splice(e.currentTarget.dataset.index, 1)
          that.setData({
            tool: that.data.tool
          })
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1000,
          })
        }
      }
    })
  },

  /**新增弹框*/
  add: function() {
    this.setData({
      addModal: true
    })
  },

  /**修改弹框*/
  edit: function() {
    this.setData({
      editModal: true
    })
  },
  /**隐藏评框*/
  hideModal: function() {
    this.setData({
      addModal: false,
      editModal: false
    });
  },

  /**新增成功按钮绑定*/
  addHandle: function () {
    wx.showToast({
      title: '添加成功',
      icon: 'success',
      duration: 1000,
    })
    this.setData({
      addModal: false
    });
  },

  /**修改成功按钮绑定*/
  editHandle: function() {
    wx.showToast({
      title: '修改成功',
      icon: 'success',
      duration: 1000,
    })
    this.setData({
      editModal: false
    });
  },
  /**取消按钮绑定*/
  canel: function() {
    this.setData({
      addModal: false,
      editModal: false
    });
  },
  /**提交按钮绑定*/
  handle:function(){
   wx.navigateTo({
     url: '../accessories/accessories',
   })
  }
})