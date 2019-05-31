/* eslint-disable radix */
import React, { Component, Suspense } from 'react';
import { Card, Row, Col, Button, } from 'antd';
import router from "umi/router";
import GridContent from '../../components/PageHeaderWrapper/GridContent';
import styles from './default.less';
import userInfoStyles from './ICUserInfo.less';
import {connect} from 'dva';
import OrderConfirmModal from "./components/LoadGasConfirmModal";

@connect(({ business, loading }) => ({
  business,
  loading: loading.models.business,
}))
class ICUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabsHeadAction: 1,
      money: null,
      mount: null,
      confirmModalVisible: false
    }
  }

  handleChange = (value) => {
    this.setState({
      tabsHeadAction: value,
    })
  };

  handleSetGasPrice = (e) => {
    const money = e.target.value ? e.target.value : 0;
    this.setState({
      mount: (parseInt(money) * 0.8).toFixed(0),
      money: e.target.value,
    })
  };

  handleSetMoney = (e) => {
    const mount = e.target.value ? e.target.value : 0;
    this.setState({
      mount: e.target.value,
      money: (parseInt(mount) * 0.8).toFixed(2),
    })
  };

  handleOk = () => {
    const { money, mount } = this.state;
    router.push({
      pathname: '/business/icUserPayment',
      state : {
        money,
        mount
      }
    });
  };

  render() {
    const { business: {userInfo} } = this.props;
    const { tabsHeadAction, money, mount, confirmModalVisible } = this.state;
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Card bordered={false} className={styles.card}>
            <div className={userInfoStyles.content}>
              <div className={userInfoStyles.head}>
                <Row type="flex" justify="space-between">
                  <Col span={11}>IC卡表用户</Col>
                  <Col span={11}>户号 {userInfo.userNo}</Col>
                </Row>
              </div>
              <div className={userInfoStyles.userInfo}>
                <div className={userInfoStyles.userInfoList}>
                  <div>用户名</div>
                  <div>{userInfo.userName}</div>
                  <div>地址</div>
                  <div>{userInfo.userAddr}</div>
                </div>
                <div className={userInfoStyles.userCard}>
                  <div className={userInfoStyles.userCardId}>
                    <span>物理卡号</span>
                    <span>{userInfo.cardCode}</span>
                  </div>
                  <div>账户余额</div>
                  <div>{parseInt(userInfo.userPraving).toFixed(2)}</div>
                </div>
              </div>
              <div className={userInfoStyles.payment}>
                <div className='head'>充值缴费</div>
                <div className={userInfoStyles.paymentTabs}>
                  <div className='tabsContent'>
                    <div className='tabsContentHead'>
                      <span>请输入购买金额 </span>
                      <span> 最大可购买{userInfo.userCanFee}元</span>
                    </div>
                    <div className={userInfoStyles.tabsContentInput}>
                      <div>
                        <input type="text" value={money} onChange={this.handleSetGasPrice} />
                        <span>元</span>
                      </div>
                      <span className='tabsContentInputC'>=</span>
                      <span>{mount}  方</span>
                    </div>
                    <div className={userInfoStyles.tabsContentBottom}>
                      <div>
                        <span>一阶梯气价2.48元/方,本次购买{100}方</span>
                        <span>二阶梯气价3.14元/方,本次购买{11}方</span>
                        <span>三阶梯气价3.48元/方,本次购买{0}方</span>
                      </div>
                      <Button onClick={this.handleOk}>前往充值</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Suspense>
      </GridContent>
    );
  }
}

export default ICUserInfo;
