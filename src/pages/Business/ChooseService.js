import React, { Component, Suspense } from 'react';
import {Card, Row, Col, Icon} from 'antd';
import GridContent from '../../components/PageHeaderWrapper/GridContent';
import styles from './default.less';
import chooseServiceStyles from './ChooseService.less';
import router from "umi/router";

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
            <Row className={chooseServiceStyles.row} gutter={48}>
              <Col span={7} offset={4}>
                <Card className={chooseServiceStyles.card} onClick={this.handleRechargeClick}>
                  <div className={chooseServiceStyles.title}>充值缴费</div>
                  <Card className={chooseServiceStyles.iconCard}>
                    <Icon type="pay-circle" className={chooseServiceStyles.icon}/>
                  </Card>
                </Card>
              </Col>
              <Col span={7} offset={2}>
                <Card className={chooseServiceStyles.card} onClick={this.handleLoadGasClick}>
                  <div className={chooseServiceStyles.title}>IC卡圈存</div>
                  <Card className={chooseServiceStyles.iconCard}>
                    <Icon type="fire" className={chooseServiceStyles.icon}/>
                  </Card>
                </Card>
              </Col>
            </Row>
          </Card>
        </Suspense>
      </GridContent>
    );
  }
}

export default ChooseService;
