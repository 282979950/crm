import request from '../utils/request';

export async function queryUserInfoByUserId(params) {
  return request('/user/queryUserInfoByUserId', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}
