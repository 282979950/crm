import React, {Suspense} from 'react';
import {Modal, Descriptions, Col, Row, Table, List, Icon} from 'antd';
import styles from './OrderConfirmModal.less';

const {Item} = Descriptions;

class OrderCompleteModal extends React.Component {

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
        <div className={styles.title}>圈存完成</div>
        <div className={styles.divider}/>
        <div className={styles.container}>
          <Row style={{padding: '147px 0'}}>
            <Col span={4} offset={6}>
              <Icon type="check-circle" theme="filled" style={{fontSize: 126, color: '#4994FA'}}/>
            </Col>
            <Col span={12} offset={1}>
              <div style={{
                color: 'rgba(0,0,0,0.75)',
                fontSize: 48,
                fontWeight: 'bold',
                height: 126,
                lineHeight: '126px',
                verticalAlign: 'middle',
                marginLeft: "-15px"
              }}>圈存成功
              </div>
            </Col>
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
                完成
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
                前往圈存
              </div>
            </Col>
          </Row>
        </div>
      </Modal>
    );
  }
}

export default OrderCompleteModal;
