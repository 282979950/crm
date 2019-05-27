import {
  queryUserInfoByUserNo,
  machineMeterUserRecharge,
  getICMeterUserRechargeInfo,
  icMeterUserLoadGas,
  icMeterUserRecharge
} from '../../../services/business';

export default {
  namespace: 'business',

  state: {
    userInfo: null
  },

  effects: {
    * queryUserInfoByUserNo({payload, callback}, {call, put}) {
      const response = yield call(queryUserInfoByUserNo, payload);
      yield put({
        type: 'saveUserInfo',
        payload: response.data,
      });
      if (callback) callback();
    },
    * machineMeterUserRecharge({payload, callback}, {call, put}) {
      const response = yield call(machineMeterUserRecharge, payload);
      if (callback) callback();
    },
    * getICMeterUserRechargeInfo({payload, callback}, {call, put}) {
      const response = yield call(getICMeterUserRechargeInfo, payload);
      if (callback) callback();
    },
    * icMeterUserLoadGas({payload, callback}, {call, put}) {
      const response = yield call(icMeterUserLoadGas, payload);
      if (callback) callback();
    },
    * icMeterUserRecharge({payload, callback}, {call, put}) {
      const response = yield call(icMeterUserRecharge, payload);
      if (callback) callback();
    },
  },

  reducers: {
    saveUserInfo(state, action) {
      return {
        userInfo: action.payload,
      };
    },
  },
};
