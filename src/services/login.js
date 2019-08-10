import request from '../utils/request'

export function fetchList () {
  const query = {
    page: 1,
    count: 2,
    type: 'video'
  }
  return request({
    url: '/getJoke',
    method: 'get',
    params: query
  })
}

export function createArticle () {
  return request({
    url: '/novelApi',
    method: 'get'
  })
}
