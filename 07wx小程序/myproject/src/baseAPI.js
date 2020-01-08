import wepy from 'wepy'
const baseURL = 'https://www.zhengzhicheng.cn/api/public/v1'
// 封装错误提示
wepy.baseToast = function (str = "获取数据失败") {
  wepy.showToast({
    title: str, //提示的内容,
    icon: 'none', //图标,
    duration: 1500, //延迟时间,
  });
}

//封装get请求API
 wepy.get = function (url, data = {}) {
  return wepy.request({ // 返回一个promise，需要return
    url: baseURL + url,
    method: 'GET',
    data
  })
}

//封装post请求API
wepy.post = function (url, data = {}) {
  return wepy.request({ // 返回一个promise，需要return
    url: baseURL + url,
    method: 'POST',
    data
  })
}
