import wepy from 'wepy'
export default class extends wepy.mixin {
    data = {
        cateList: []
    }
    onLoad() {
        this.getCateList()
    }
    methods = {

    }
  async  getCateList() {
        const { data: res } = await wepy.get('/categories')
        if (res.meta.status !== 200) return wepy.baseToast()
        this.cateList = res.message
        this.$apply()
        console.log(this.cateList)
    }
}
