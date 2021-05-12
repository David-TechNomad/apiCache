import request from '@/axios'

export async function getList2(params) {
  const url = '/mock/list3-1'
  const key = url + (params ? JSON.stringify(params) : '')

  // 获得数据
  let promise = ExpriesCache.get(key)

  if (!promise) {
    promise = request.get(url, { params })

    console.log('请求数据')

    // 使用 10s 缓存，10s之后再次get就会 获取null 而从服务端继续请求
    ExpriesCache.set(key, promise, 5)
  }

  return promise
}

class ItemCache {
  constructor(data, timeout) {
    this.data = data
    // 设定超时时间，设定为多少秒
    this.timeout = timeout
    // 创建对象时候的时间，大约设定为数据获得的时间
    this.cacheTime = Date.now()
  }
}

class ExpriesCache {
  // 定义静态数据map来作为缓存池
  static cacheMap = new Map()

  // 数据是否超时
  static isOverTime(name) {
    const data = ExpriesCache.cacheMap.get(name)

    // 没有数据 一定超时
    if (!data) return true

    // 获取系统当前时间戳
    const currentTime = Date.now()

    // 获取当前时间与存储时间的过去的秒数
    const overTime = (currentTime - data.cacheTime) / 1000

    // 如果过去的秒数大于当前的超时时间，也返回null让其去服务端取数据
    if (Math.abs(overTime) > data.timeout) {
      // 此代码可以没有，不会出现问题，但是如果有此代码，再次进入该方法就可以减少判断。
      ExpriesCache.cacheMap.delete(name)
      return true
    }

    // 不超时
    return false
  }

  // 当前data在 cache 中是否超时
  static has(name) {
    return !ExpriesCache.isOverTime(name)
  }

  // 删除 cache 中的 data
  static delete(name) {
    return ExpriesCache.cacheMap.delete(name)
  }

  // 获取
  static get(name) {
    const isDataOverTiem = ExpriesCache.isOverTime(name)
    //如果 数据超时，返回null，但是没有超时，返回数据，而不是 ItemCache 对象
    return isDataOverTiem ? null : ExpriesCache.cacheMap.get(name).data
  }

  // 默认存储20分钟
  static set(name, data, timeout = 1200) {
    // 设置 itemCache
    const itemCache = new ItemCache(data, timeout)
    //缓存
    ExpriesCache.cacheMap.set(name, itemCache)
  }
}
