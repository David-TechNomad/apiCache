// 使用 Mock
import Mock from 'mockjs'
Mock.setup({ timeout: '500-1000' })

Mock.mock(/\/mock\/list1/, 'get', ['jiang', 'cheng', 'dan', 'zhong', 'volia'])
Mock.mock(/\/mock\/list2/, 'get', [
  '第二个1',
  '第二个2',
  '第二个3',
  '第二个4',
  '第二个5',
])
Mock.mock(/\/mock\/list3-1/, 'get', [
  '第三个1',
  '第三个2',
  '第三个3',
  '第三个4',
  '第三个5',
])
Mock.mock(/\/mock\/list3-2/, 'get', [
  '第三个2.1',
  '第三个2.2',
  '第三个2.3',
  '第三个2.4',
  '第三个2.5',
])
Mock.mock(/\/mock\/list4/, 'get', [
  '第四个1',
  '第四个2',
  '第四个3',
  '第四个4',
  '第四个5',
])
