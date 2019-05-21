import {queryUserInfoByUserId} from '../../../services/business';

export default {
  namespace: 'business',

  state: {
    userInfo: null
  },

  effects: {
    * queryUserInfoByUserId({payload, callback}, {call, put}) {
      const response = yield call(queryUserInfoByUserId, payload);
      yield put({
        type: 'saveUserInfo',
        payload: response.data,
      });
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
