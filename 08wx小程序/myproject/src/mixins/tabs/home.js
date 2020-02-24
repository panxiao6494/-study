import wepy from 'wepy'
export default class extends wepy.mixin {
    data = {
        swiperList: [],
        cateItems: [],
        floorData: []
    }

    onLoad() {
        this.getSwiperData()
        this.getCateItems()
        this.getFloorData()

    }
    methods = {
        goGoodsList(url) {
            wepy.navigateTo({
                url
            })
        }
    }
    async getSwiperData() {
        const { data: res } = await wepy.get('/home/swiperdata')
        if (res.meta.status !== 200) {
            return wepy.baseToast()
        }
        this.swiperList = res.message
        this.$apply() // 通知页面进行异步渲染
    }
    async  getCateItems() {
        const { data: res } = await wepy.get('/home/catitems')
        if (res.meta.status !== 200) {
            return wepy.baseToast()
        }
        this.cateItems = res.message
        this.$apply()
    }
    async getFloorData() {
        const { data: res } = await wepy.get('/home/floordata')
        if (res.meta.status !== 200) return wepy.baseToast()
        this.floorData = res.message
        this.$apply()
        console.log(this.floorData)
    }
}