import React, { Component, Suspense } from 'react';
import {Button, Card, Layout, Typography, Row, Col, Icon} from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './Welcome.less';
import logo from "../../assets/lanyan-logo-rect.svg";
import router from "umi/router";

const { Title } = Typography;
const { Meta } = Card;
const { Content } = Layout;

class ChooseService extends Component {

  handleRechargeClick = () => {
    router.push('/business/userNoInput');
  };

  handleLoadGasClick = () => {
    // todo 定位到提示插卡界面
    router.push('/business/userNoInput');
  };

  render() {
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Card bordered={false} className={styles.card}>
            <Row className={styles.row} gutter={48}>
              <Col span={7} offset={4}>
                <Card className={styles.chooseServiceCard} onClick={this.handleRechargeClick}>
                  <div className={styles.chooseServiceTitle}>充值缴费</div>
                  <Card className={styles.chooseServiceIconCard}>
                    <Icon type="pay-circle" className={styles.chooseServiceIcon}/>
                  </Card>
                </Card>
              </Col>
              <Col span={7} offset={2}>
                <Card className={styles.chooseServiceCard} onClick={this.handleLoadGasClick}>
                  <div className={styles.chooseServiceTitle}>IC卡圈存</div>
                  <Card className={styles.chooseServiceIconCard}>
                    <Icon type="fire" className={styles.chooseServiceIcon}/>
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
