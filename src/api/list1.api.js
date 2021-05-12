import request from '@/axios'

const dataCache = new Map()

export async function getList2(params) {
  const url = '/mock/list1'
  const key = url + (params ? JSON.stringify(params) : '')
  // 从data 缓存中获取 数据
  let data = dataCache.get(key)
  if (!data) {
    // 没有数据请求服务器
    const res = await request.get(key, { params })
    data = res.data

    // 设置数据缓存
    dataCache.set(url, data)
  }

  return data
}
