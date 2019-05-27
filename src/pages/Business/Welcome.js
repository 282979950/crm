import React, { Component, Suspense } from 'react';
import {Button, Card, Layout, Typography, Row, Col} from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './Welcome.less';
import logo from "../../assets/lanyan-logo-rect.svg";
import router from "umi/router";

const { Title } = Typography;
const { Meta } = Card;
const { Content } = Layout;

class Welcome extends Component {

  handleClick = () => {
    router.push('/business/chooseService');
  };

  render() {
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Card bordered={false} className={styles.card}>
            <Row gutter={48}>
              <Col span={12} offset={6}>
                <img src={logo} width={100} />
              </Col>
            </Row>
            <Row gutter={48}>
              <Col span={12} offset={6}>
                <Title>欢迎使用武汉天然气现金充值机</Title>
              </Col>
            </Row>
            <Row gutter={48}>
              <Col span={12} offset={6}>
                <Button type="primary" size="large" onClick={this.handleClick}>开始使用</Button>
              </Col>
            </Row>
          </Card>
        </Suspense>
      </GridContent>
    );
  }
}

export default Welcome;
