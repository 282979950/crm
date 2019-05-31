/* eslint-disable react/self-closing-comp */
import React, { Component, Suspense } from 'react';
import { Card, Row, Col, Button } from 'antd';
import router from "umi/router";
import GridContent from '../../components/PageHeaderWrapper/GridContent';
import styles from './default.less';
import paymentStyles from './Payment.less';
import OrderConfirmModal from "./components/OrderConfirmModal";
import {connect} from "dva";

@connect(({ business, loading }) => ({
  business,
  loading: loading.models.business,
}))
class ICUserPayment extends Component {

  handleOk = () => {
    router.push('/business/payment');
  };

  state = {
    currentPayment: 200,
    confirmModalVisible: false
  };

  setConfirmModalVisible = (flag)=> {
    this.setState({
      confirmModalVisible: flag
    });
  };

  render() {
    const {location: {state: {money, mount}}, business: {userInfo}} = this.props;
    const { currentPayment, confirmModalVisible } = this.state;
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Card bordered={false} className={styles.card}>
            <div className={paymentStyles.content}>
              <div className='left'>
                <div className={paymentStyles.leftHead}>
                  <div className='head'>
                    <Row type="flex" justify="space-between">
                      <Col span={11}>请投入纸币</Col>
                      <Col span={11}>29s</Col>
                    </Row>
                  </div>
                  <div className='content'>
                    <Row type="flex" justify="space-between">
                      <Col span={6}>应缴费用（元）</Col>
                      <Col span={8}>实缴费用（元）</Col>
                    </Row>
                    <Row type="flex" justify="space-between">
                      <Col span={8}>{parseInt(money).toFixed(2)}</Col>
                      <Col span={16}>{currentPayment.toFixed(2)}/<span>{(Math.ceil(parseInt(money)/100)*100).toFixed(2)}</span></Col>
                    </Row>
                  </div>
                </div>
                <div className={paymentStyles.leftBottom}>
                  <Row type="flex">
                    <Col span={7}>
                      <div className='imgDiv'>
                        <div>1</div>
                        <div></div>
                      </div>
                      <div className='textContent'>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum1ABC的风景hi接口里面后朋克 </div>
                    </Col>
                    <Col span={7}>
                      <div className='imgDiv'>
                        <div>2</div>
                        <div></div>
                      </div>
                      <div className='textContent'>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum2 </div>
                    </Col>
                    <Col span={7}>
                      <div className='imgDiv'>
                        <div>3</div>
                        <div></div>
                      </div>
                      <div className='textContent'>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum3 </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <div className='right'>
                <div className={paymentStyles.rightContent}>
                  <div>用户须知</div>
                  <div>
                    1. 现金充值机只支持100元纸币
                    <br/>
                    2. 现金充值机不支持找零业务，剩余金额将存入账户余额中
                  </div>
                  <Button onClick={() => this.setConfirmModalVisible(true)} disabled={Math.ceil(parseInt(money)/100)*100 > currentPayment}>确认缴费</Button>
                  <Button onClick={this.handleOk}>取消</Button>
                </div>
              </div>
            </div>
          </Card>
          <OrderConfirmModal
            confirmModalVisible={confirmModalVisible}
            setCofirmModalVisible={this.setConfirmModalVisible}
            userInfo={userInfo}
            money={money}
            mount={mount}
            currentPayment={currentPayment}
          />
        </Suspense>
      </GridContent>
    );
  }
}

export default ICUserPayment;
