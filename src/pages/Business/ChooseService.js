import React, { Component, Suspense } from 'react';
import {Button, Card, Layout, Typography, Row, Col} from 'antd';
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
            <Row gutter={48}>
              <Col span={24}>
                <Title>请选择服务类型</Title>
              </Col>
            </Row>
            <Row gutter={48}>
              <Col span={6} offset={4}>
                <Card className={styles.chooseServiceCard1} onClick={this.handleRechargeClick}>
                  <Title style={{ "margin-bottom": "0px"}}>充值</Title>
                </Card>
              </Col>
              <Col span={6} offset={4}>
                <Card className={styles.chooseServiceCard2} onClick={this.handleLoadGasClick}>
                  <Title style={{ "margin-bottom": "0px"}}>圈存</Title>
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
