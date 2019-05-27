import request from '../utils/request';

/**
 * 依据户号查询用户
 * @param params
 * @returns {Promise<void>}
 */
export async function queryUserInfoByUserNo(params) {
  return request('/api/queryUserInfoByUserNo', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export function machineMeterUserRecharge(params) {
  return request('/api/machineMeterUserRecharge', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export function getICMeterUserRechargeInfo(params) {
  return request('/api/getICMeterUserRechargeInfo', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export function icMeterUserRecharge(params) {
  return request('/api/icMeterUserRecharge', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}

export function icMeterUserLoadGas(params) {
  return request('/api/icMeterUserLoadGas', {
    method: 'POST',
    data: {
      ...params,
    },
  });
}
