import React, {Component, Suspense} from 'react';
import {Button, Input, Card, Layout, Typography, Form, Col, Row, } from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './default.less';
import DescriptionList from '../../components/DescriptionList';
import Header from "../../layouts/Header";
import router from "umi/router";
import {connect} from 'dva';

const {Title} = Typography;
const {Content} = Layout;
const { Search } = Input;
const { Description } = DescriptionList;

@connect(({business, loading}) => ({
  business,
  loading: loading.models.business,
}))
@Form.create()
class UserNoInput extends Component {

  componentWillMount() {

  }



  handleMachineMeterRechargeClick = () => {
    router.push('/business/machineMeterRecharge');
  };

  handleICMeterRechargeClick = () => {
    router.push('/business/icMeterRecharge');
  };

  render() {
    const {
      business: { userInfo },
      form: { getFieldDecorator },
    } = this.props;
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Card bordered={false} className={styles.card}>
            <Row>
              <Col span={24} >
                <Title>请输入用户户号</Title>
              </Col>
            </Row>
            <Row>
              <Col span={12} offset={6}>
                <Form>
                  <Form.Item>
                    {getFieldDecorator('userId', {
                      rules: [{
                        pattern: /^[0-9]+$/,
                        message: '户号只能为数字',
                      }, {
                        required: true,
                        message: '户号不能为空',
                      }]
                    })(<Search
                      enterButton="查询"
                      size="large"
                      onSearch={this.handleSearch}
                      autoComplete="off"
                    />)}
                  </Form.Item>
                </Form>
              </Col>
            </Row>
            {userInfo ? (
              <div>
                <Row>
                  <Col span={24}>
                    <Title>用户基本信息</Title>
                  </Col>
                </Row>
                {userInfo.meterType === "1"? (<Row>
                  <Col span={12} offset={6}>
                    <DescriptionList>
                      <Description term="户号">{userInfo.userNo}</Description>
                      <Description term="客户名">{userInfo.userName}</Description>
                      <Description term="用户表类型">机械表用户</Description>
                      <Description term="地址">{userInfo.userAddr}</Description>
                      <Description term="用户本次可购最大气量">{userInfo.userCanAmount}</Description>
                      <Description term="用户可购金额">{userInfo.userCanFee}</Description>
                      <Description term="欠费总额">{userInfo.allGasFee}</Description>
                      <Description term="可用余额">{userInfo.userPraving}</Description>
                      <Description term="上期止码">{userInfo.latestStopCode}</Description>
                    </DescriptionList>
                  </Col>
                  <Col span={24}>
                    <Card className={styles.chooseServiceCard1} onClick={this.handleMachineMeterRechargeClick}>
                      <Title style={{ "marginBottom": "0px"}}>前往缴费</Title>
                    </Card>
                  </Col>
                </Row>):(<Row>
                  <Col span={24} offset={6}>
                    <DescriptionList col={24}>
                      <Description term="户号">{userInfo.userNo}</Description>
                      <Description term="客户名">{userInfo.userName}</Description>
                      <Description term="用户表类型">IC卡表用户</Description>
                      <Description term="IC卡物理卡号">{userInfo.icCardNo}</Description>
                      <Description term="地址">{userInfo.userAddr}</Description>
                      <Description term="用户本次可购最大气量">{userInfo.userCanAmount}</Description>
                      <Description term="用户可购金额">{userInfo.userCanFee}</Description>
                      <Description term="可用余额">{userInfo.allGasFee}</Description>
                    </DescriptionList>
                  </Col>
                  <Card className={styles.chooseServiceCard1} onClick={this.handleRechargeClick}>
                    <Title style={{ "marginBottom": "0px"}}>前往缴费</Title>
                  </Card>
                </Row>)}
              </div>) : null}
          </Card>
        </Suspense>
      </GridContent>
    );
  }
}

export default UserNoInput;
