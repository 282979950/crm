/* eslint-disable react/self-closing-comp */
/* eslint-disable no-undef */
import React, { Component, Suspense } from 'react';
import { Card, Row, Col, Button, } from 'antd';
import GridContent from '../../components/PageHeaderWrapper/GridContent';
import styles from './default.less';
import loadGasStyles from './LoadGas.less';

// const { TabPane } = Tabs;
class MechanicalUserInfo extends Component {

  handleOk = () => {
    router.push('/business/payment');
  }

  render() {
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Card bordered={false} className={styles.card}>
            <div className={loadGasStyles.content}>
              <div className={loadGasStyles.head}>
                <Row type="flex" justify="space-between">
                  <Col span={11}>机械表用户</Col>
                  <Col span={11}>户号 20000088880000888800</Col>
                </Row>
              </div>
              <div className={loadGasStyles.userInfo}>
                <div className={loadGasStyles.userInfoList}>
                  <div>用户名</div>
                  <div>湖北省武汉市东西湖区东西湖四百五十三路东西湖家具建材大世界三期武</div>
                  <div>地址</div>
                  <div>湖北省武汉市东西湖区东西湖四百五十三路东西湖家具建材大世界三期武湖北省武汉市东西湖区东西湖四百五十三路东西湖家具建材大世界三期武</div>
                </div>
                <div className={loadGasStyles.userCard}>
                  <div className={loadGasStyles.userCardId}>
                    <span>上期止码</span>
                    <span>20000088880000888800</span>
                  </div>
                  <div>账户余额</div>
                  <div>99,999,999,999.99</div>
                </div>
              </div>
              <div className={loadGasStyles.payment}>
                <div className='head'>充值缴费</div>
                <div className={loadGasStyles.paymentContent}>
                  <Row type="flex" justify="space-between" className='navTop'>
                    <Col span={5}>
                      <div>上期使用燃气（方）</div>
                      <span>999,999</span>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={5}>
                      <div>燃气价格（元）</div>
                      <span>10</span>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={5}>
                      <div>上期实际费用（元）</div>
                      <span>9,999,990</span>
                    </Col>
                    <Col span={1}></Col>
                    <Col span={5}>
                      <div>账户余额（元）</div>
                      <span>9,999,990</span>
                    </Col>
                  </Row>
                </div>

                <div className={loadGasStyles.paymentBottom}>
                  <div>本期应缴（元）</div>
                  <Row type="flex" justify="space-between">
                    <Col span={16}>9,999,990</Col>
                    <Col span={8}>
                      <Button>去交费</Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Card>
        </Suspense>
      </GridContent>
    );
  }
}

export default MechanicalUserInfo;
