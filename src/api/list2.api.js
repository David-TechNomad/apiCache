import request from '@/axios'

const promiseCache = new Map()

export async function getList2(params) {
  const url = '/mock/list2'
  const key = url + (params ? JSON.stringify(params) : '')

  let promise = promiseCache.get(key)

  if (!promise) {
    promise = request
      .get(url)
      .then((res) => {
        console.log('调用了一次')
        return res.data
      })
      .catch((error) => {
        // 在请求回来后，如果出现问题，把promise从cache中删除 以避免第二次请求继续出错
        promiseCache.delete(key)
        return Promise.reject(error)
      })

    promiseCache.set(key, promise)
  }

  return promise
}
