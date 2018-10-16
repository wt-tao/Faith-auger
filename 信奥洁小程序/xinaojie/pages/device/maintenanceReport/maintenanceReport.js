// pages/device/maintenanceReport/maintenanceReport.js
Page({

  /** 页面的初始数据*/
  data: {
    files: [],
    max: 120,
   isShowFrom1: false,
    tool: [{
      Tid: 1,
      name: 'X形状活扳手'
    },
    {
      Tid: 2,
      name: '呆扳手'
    },
    {
      Tid: 3,
      name: '梅花扳手'
    },
    {
      Tid: 4,
      name: '剪刀'
    },
    {
      Tid: 5,
      name: '钳子'
    },
    {
      Tid: 6,
      name: '锤子'
    },
    {
      Tid: 7,
      name: '镊子'
    },
    {
      Tid: 8,
      name: '胶水'
    },
    ],
    selectAll: false,

  },

  /** 生命周期函数--监听页面加载*/
  onLoad: function (options) {
   
  },

  /** 生命周期函数--监听页面初次渲染完成*/
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

  /** 生命周期函数--监听页面卸载*/
  onUnload: function () {

  },

  /** 页面相关事件处理函数--监听用户下拉动作*/
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  },

  /**字数限定*/
  inputs: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);
    if (len > this.data.max) {
      return;
    } else {
      this.setData({
        currentWordNumber: len //当前字数  
      });
    }
  },


  /** 图片上传*/
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id,
      urls: this.data.files
    })
  },

  /**抽屉原理展开*/
  showFrom: function (e) {
    var param = e.target.dataset.param;
    this.setData({
      isShowFrom1: param == 1 ? (!this.data.isShowFrom1) : false,
    });
  },

   /**全选*/
  selectAll: function () {
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
  selectCancel: function () {
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



})