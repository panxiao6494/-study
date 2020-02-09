const app = getApp();
Component({

    pageLifetimes: {
        show: function() {
            // 页面被展示
            this.init();
        },
        hide: function() {
            // 页面被隐藏
        },
        resize: function(size) {
            // 页面尺寸变化
        }
    },

    properties: {
        currentIdx: {
            type: String,
            value: "0"
        }
    },
    data: {
        activeIdx: 0,
        config: {
            color: '#FFFFFF',
            selectedColor: '#FFBA41'
        },
        teamList: [],
        list: [{
                iconPath: "/image/tabbar/index1.png",
                selectedIconPath: "/image/tabbar/index1-s.png",
                pagePath: "/pages/index/index",
                text: "首页"
            },
            {
                iconPath: "/image/tabbar/paiming.png",
                selectedIconPath: "/image/tabbar/paiming-s.png",
                pagePath: "/pages/vip/index",
                text: "会员中心"
            },
            {
                iconPath: "/image/tabbar/price.png",
                selectedIconPath: "/image/tabbar/price-s.png",
                pagePath: "/pages/myCenter/index",
                text: "我的"
            }
        ],

    },

    methods: {
        init: function() {
            wx.hideTabBar();
            let current = this.data.currentIdx;
            this.setData({
                activeIdx: current
            });
        },
        switchTab(evt) {
            const {
                pagePath,
                itemIdx
            } = evt.currentTarget.dataset;
            console.log(itemIdx, pagePath);
            wx.switchTab({
                url: pagePath
            })

        },
        handleError(e) {
            console.log("===================", e);
        }
    },
});