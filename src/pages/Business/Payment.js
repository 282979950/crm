/* eslint-disable react/self-closing-comp */
import React, { Component, Suspense } from 'react';
import { Card, Row, Col, Button } from 'antd';
import router from "umi/router";
import GridContent from '../../components/PageHeaderWrapper/GridContent';
import styles from './default.less';
import paymentStyles from './Payment.less';

// const { TabPane } = Tabs;
class Payment extends Component {

  handleOk = () => {
    router.push('/business/payment');
  }

  render() {
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Card bordered={false} className={styles.card}>
            <div className={paymentStyles.content}>
              <div className='left'>
                <div className={paymentStyles.leftHead}>
                  <div className='head'>
                    <Row type="flex" justify="space-between">
                      <Col span={11}>充值缴费</Col>
                      <Col span={11}>29s</Col>
                    </Row>
                  </div>
                  <div className='content'>
                    <Row type="flex" justify="space-between">
                      <Col span={11}>本期应缴（元）</Col>
                      <Col span={11}>已放入（张）</Col>
                    </Row>
                    <Row type="flex" justify="space-between">
                      <Col span={16}>1,000.00/<span>9,990.00</span></Col>
                      <Col span={8}>10/<span>100</span></Col>
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
                  <div>Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor. Etiam at condimentum nisl, vitae sagittis orci. Donec id dignissim nunc. Donec elit ante, eleifend a dolor et, venenatis facilisis dolor. In feugiat orci odio, sed lacinia sem elementum quis. Aliquam consectetur, eros et vulputate euismod, nunc leo tempor lacu</div>
                  <Button onClick={this.handleOk}>确认缴费</Button>
                  <Button onClick={this.handleOk}>取消</Button>
                </div>
              </div>
            </div>
          </Card>
        </Suspense>
      </GridContent>
    );
  }
}

export default Payment;
