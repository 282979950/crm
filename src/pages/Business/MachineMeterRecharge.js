import React, {Component, Suspense} from 'react';
import {Button, Input, Card, Layout, Typography, Form, Col, Row,} from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './default.less';
import DescriptionList from '../../components/DescriptionList';
import Header from "../../layouts/Header";
import router from "umi/router";
import {connect} from 'dva';

const {Title} = Typography;

@connect(({business, loading}) => ({
  business,
  loading: loading.models.business,
}))
class MachineMeterRecharge extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allPayment: 0
    };
  }

  handleConfirm = ()=> {
    // 发起机械表缴费
    const {dispatch} = this.props;
  };

  handleCancel = ()=> {
    // 吐钱
  };

  render() {
    const {
      business: {userInfo},
    } = this.props;
    const { allPayment } = this.state;
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Card bordered={false} className={styles.card}>
            <Row>
              <Col span={24}>
                <Title>机械表用户缴费</Title>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Card className={styles.chooseServiceCard1} onClick={this.handleMachineMeterRechargeClick}>
                  <Title style={{"marginBottom": "0px"}}>欠费总额</Title>
                  <Title style={{"color": "#ee0000"}}>{userInfo.allGasFee}</Title>
                </Card>
              </Col>
              <Col span={12}>
                <Card className={styles.chooseServiceCard1} onClick={this.handleMachineMeterRechargeClick}>
                  <Title style={{"marginBottom": "0px"}}>已缴总额</Title>
                  <Title style={{"color": "#ee0000"}}>{allPayment}</Title>
                </Card>
              </Col>
              <Col span={24}>
                <Card className={styles.chooseServiceCard1} onClick={this.handleMachineMeterRechargeClick}>
                  <Title style={{"marginBottom": "0px"}}>请投放纸币</Title>
                  <Title style={{"color": "#ee0000"}}>现金充值机只能识别100元纸币</Title>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button type="primary" size="large" onClick={this.handleConfirm}>确认</Button>
                <Button type="primary" size="large" onClick={this.handleCancel}>取消</Button>
              </Col>
            </Row>
          </Card>
        </Suspense>
      </GridContent>
    );
  }
}

export default MachineMeterRecharge;
