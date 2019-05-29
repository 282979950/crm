import React, {Suspense} from 'react';
import {Modal, Descriptions} from 'antd';
import styles from './OrderConfirmModal.less';

const {Item} = Descriptions;

class OrderConfirmModal extends React.Component {

  render() {
    const {confirmModalVisible, setConfirmModalVisible} = this.props;
    return (
      <Modal
        // title={<div className={styles.title}>订单确认</div>}
        title={null}
        footer={null}
        bodyStyle={{width: '960px', padding: '19px 36px'}}
        centered
        visible={confirmModalVisible}
        onOk={() => setConfirmModalVisible(false)}
        onCancel={() => setConfirmModalVisible(false)}
        closable={false}
        maskClosable={false}
        width={960}
      >
        <div className={styles.title}>订单确认</div>
        <div className={styles.divider}/>
        <div className={styles.container}>
          <Descriptions title={<div className={styles.userInfoTitle}>账户信息</div>} column={1}>
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
        </div>
      </Modal>
    );
  }
}

export default OrderConfirmModal;
