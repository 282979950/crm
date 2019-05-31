import React, {Suspense} from 'react';
import {Modal, Descriptions, Col, Row, Table, List} from 'antd';
import styles from './OrderConfirmModal.less';

const {Item} = Descriptions;

class LoadGasConfirmModal extends React.Component {

  render() {
    const {confirmModalVisible, setConfirmModalVisible} = this.props;
    return (
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
        <div className={styles.title}>圈存信息</div>
        <div className={styles.divider}/>
        <div className={styles.container} style={{paddingLeft: 49, paddingRight: 49}}>
          <Descriptions
            title={<div className={styles.userInfoTitle} style={{marginLeft: '-24px'}}>账户信息</div>}
            column={1}
          >
            <Item label={<span className={styles.userInfoLabel}>用户户号</span>}>
              <span className={styles.userInfoValue}>1234567890</span>
            </Item>
            <Item label={<span className={styles.userInfoLabel}>用户姓名</span>}>
              <span className={styles.userInfoValue}>李泰然</span>
            </Item>
            <Item label={<span className={styles.userInfoLabel}>用户地址</span>}>
              <span className={styles.userInfoValue}>湖北省武汉市东西湖区东西湖四百五十三路东西湖家具建材大世界三期</span>
            </Item>
          </Descriptions>
        </div>
        <div className={styles.divider}/>
        <div className={styles.container}>
          <div className={styles.userInfoTitle}>缴费信息</div>
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
                  充值时间
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
                  2019-09-09 16:32:45
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
                  999.00 方
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
                  充值金额
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
                  99,999.00 元
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
                  圈存时间
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
                  2019-09-09 16:32:45
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
                确认圈存
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    );
  }
}

export default LoadGasConfirmModal;
