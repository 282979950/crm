import React, { Component, Suspense } from 'react';
import { Card, Icon } from 'antd';
import router from "umi/router";
import GridContent from '../../components/PageHeaderWrapper/GridContent';
import styles from './default.less';
import chooseServiceStyles from './ChooseService.less';

class ChooseService extends Component {

  handleRechargeClick = () => {
    router.push('/business/userQuery');
  };

  handleLoadGasClick = () => {
    // todo 定位到提示插卡界面
    router.push('/business/userQuery');
  };

  render() {
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Card bordered={false} className={styles.card}>
            <div className={chooseServiceStyles.row}>
              <div onClick={this.handleRechargeClick}>
                <span className={chooseServiceStyles.title}>充值缴费</span>
                <Icon type="pay-circle" className={chooseServiceStyles.icon} />
              </div>
              <div onClick={this.handleLoadGasClick}>
                <span className={chooseServiceStyles.title}>IC卡圈存</span>
                <Icon type="fire" className={chooseServiceStyles.icon} />
              </div>
            </div>
          </Card>
        </Suspense>
      </GridContent>
    );
  }
}

export default ChooseService;
