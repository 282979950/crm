import React, {Suspense} from 'react';
import {Modal, Descriptions, Col, Row, Spin} from 'antd';
import styles from './OrderConfirmModal.less';
import moment from "moment";

const {Item} = Descriptions;

class OrderConfirmModal extends React.Component {

  state = {
    trading: false
  };

  icMeterUserRecharge = () => {
    
  };

  render() {
    const {confirmModalVisible, setConfirmModalVisible, userInfo, money, mount, currentPayment} = this.props;
    return (
      <Spin spinning={this.state.trading}>
        <Modal
          title={null}
          footer={null}
          bodyStyle={{width: '960px', padding: '19px 36px'}}
          centered
          visible={confirmModalVisible}
          closable={false}
          maskClosable={false}
          width={960}
        >
          <div className={styles.title}>订单确认</div>
          <div className={styles.divider}/>
          <div className={styles.container}>
            <Descriptions title={<div className={styles.userInfoTitle}>账户信息</div>} column={1}>
              <Item label={<span className={styles.userInfoLabel}>用户户号</span>}>
                <span className={styles.userInfoValue}>{userInfo.userNo}</span>
              </Item>
              <Item label={<span className={styles.userInfoLabel}>用户姓名</span>}>
                <span className={styles.userInfoValue}>{userInfo.userName}</span>
              </Item>
              <Item label={<span className={styles.userInfoLabel}>用户地址</span>}>
                <span className={styles.userInfoValue}>{userInfo.userAddr}</span>
              </Item>
            </Descriptions>
          </div>
          <div className={styles.divider}/>
          <div className={styles.container}>
            <div className={styles.userInfoTitle}>缴费信息</div>
            <Row>
              <Col span={19} offset={5} className={styles.gasPriceContainer}>
                <Col span={1}>
                  <div className={styles.gasPriceTagIconGreen}/>
                </Col>
                <Col span={7}>
                  <div>一阶梯340方（2.48元/立方）</div>
                </Col>
                <Col span={1}>
                  <div className={styles.gasPriceTagIconYellow}/>
                </Col>
                <Col span={7}>
                  <div>二阶梯240方（3.14元/立方）</div>
                </Col>
                <Col span={1}>
                  <div className={styles.gasPriceTagIconBlue}/>
                </Col>
                <Col span={7}>
                  <div>三阶梯无上限（3.48元/立方）</div>
                </Col>
              </Col>
            </Row>
            <Row span={24} style={{paddingTop: 16}}>
              <Col span={6}>
                <div className={styles.gasPriceLegendGreen}/>
              </Col>
              <Col span={6}>
                <div className={styles.gasPriceLegendYellow}/>
              </Col>
              <Col span={12}>
                <div className={styles.gasPriceLegendBlue}/>
              </Col>
            </Row>
            <Row span={24} style={{marginTop: 8}}>
              <Row style={{height: 35, paddingTop: 3, backgroundColor: "rgba(216,216,216,0.3)"}}>
                <Col span={12}>
                  <div style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    lineHeight: "27px",
                    color: 'rgba(0,0,0,0.75)',
                    padding: '0 24px'
                  }}>
                    缴费时间
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{
                    fontSize: 20,
                    lineHeight: "27px",
                    color: 'rgba(0,0,0,0.75)',
                    textAlign: 'right',
                    padding: '0 24px'
                  }}>
                    {moment().format('YYYY-MM-DD HH:mm:ss')}
                  </div>
                </Col>
              </Row>
              <Row style={{height: 35, paddingTop: 3, backgroundColor: "rgba(255,249,231,0.3)"}}>
                <Col span={12}>
                  <div style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    lineHeight: "27px",
                    color: 'rgba(0,0,0,0.75)',
                    padding: '0 24px'
                  }}>
                    充值气量
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{
                    fontSize: 20,
                    lineHeight: "27px",
                    color: 'rgba(0,0,0,0.75)',
                    textAlign: 'right',
                    padding: '0 24px'
                  }}>
                    {parseInt(mount).toFixed(2)} 方
                  </div>
                </Col>
              </Row>
              <Row style={{height: 35, paddingTop: 3, backgroundColor: "rgba(216,216,216,0.3)"}}>
                <Col span={12}>
                  <div style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    lineHeight: "27px",
                    color: 'rgba(0,0,0,0.75)',
                    padding: '0 24px'
                  }}>
                    应付金额
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{
                    fontSize: 20,
                    lineHeight: "27px",
                    color: 'rgba(0,0,0,0.75)',
                    textAlign: 'right',
                    padding: '0 24px'
                  }}>
                    {parseInt(money).toFixed(2)} 元
                  </div>
                </Col>
              </Row>
              <Row style={{height: 35, paddingTop: 3, backgroundColor: "rgba(255,249,231,0.3)"}}>
                <Col span={12}>
                  <div style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    lineHeight: "27px",
                    color: 'rgba(0,0,0,0.75)',
                    padding: '0 24px'
                  }}>
                    实付金额
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{
                    fontSize: 20,
                    lineHeight: "27px",
                    color: 'rgba(0,0,0,0.75)',
                    textAlign: 'right',
                    padding: '0 24px'
                  }}>
                    {parseInt(currentPayment).toFixed(2)} 元
                  </div>
                </Col>
              </Row>
              <Row style={{height: 35, paddingTop: 3, backgroundColor: "rgba(216,216,216,0.3)"}}>
                <Col span={12}>
                  <div style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    lineHeight: "27px",
                    color: 'rgba(0,0,0,0.75)',
                    padding: '0 24px'
                  }}>
                    账户余额
                  </div>
                </Col>
                <Col span={12}>
                  <div style={{
                    fontSize: 20,
                    lineHeight: "27px",
                    color: 'rgba(0,0,0,0.75)',
                    textAlign: 'right',
                    padding: '0 24px'
                  }}>
                    {(parseInt(currentPayment) - parseInt(money) + parseInt(userInfo.userPraving)).toFixed(2)} 元
                  </div>
                </Col>
              </Row>
            </Row>
            <Row style={{marginTop: 21}}>
              <Col span={11} style={{height: 72, border: '2px solid rgba(0,0,0,0.12)', borderRadius: 8}}>
                <div
                  style={{
                    fontSize: 28,
                    color: 'rgba(61,61,61,1)',
                    lineHeight: '72px',
                    fontWeight: 'bold',
                    textAlign: 'center'
                  }}
                  onClick={() => setConfirmModalVisible(false)}
                >
                  取消
                </div>
              </Col>
              <Col span={11} offset={2} style={{
                height: 72,
                backgroundImage: 'linear-gradient(225deg, #4994FA 0%, #235BF4 100%)',
                borderRadius: 8,
              }}>
                <div
                  style={{
                    fontSize: 28,
                    lineHeight: '72px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textShadow: '0 2px 4px #03833A',
                    color: 'rgba(255,255,255,1)'
                  }}
                  onClick={() => setConfirmModalVisible(false)}
                >
                  确认缴费
                </div>
              </Col>
            </Row>
          </div>
        </Modal>
      </Spin>
    );
  }
}

export default OrderConfirmModal;
