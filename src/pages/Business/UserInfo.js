/* eslint-disable radix */
import React, { Component, Suspense } from 'react';
import { Card, Row, Col, Button, } from 'antd';
import router from "umi/router";
import GridContent from '../../components/PageHeaderWrapper/GridContent';
import styles from './default.less';
import userInfoStyles from './UserInfo.less';

// const { TabPane } = Tabs;
class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabsHeadAction: 1,
      money: '',
      gasPrice: 0,
    }
  }

  handleChange = (value) => {
    this.setState({
      tabsHeadAction: value,
    })
  };

  handleSetGasPrice = (e) => {
    const money = e.target.value ? e.target.value : 0;
    this.setState({
      gasPrice: (parseInt(money) * 0.8).toFixed(0),
      money: e.target.value,
    })
  };

  handleSetMoney = (e) => {
    const gasPrice = e.target.value ? e.target.value : 0;
    this.setState({
      gasPrice: e.target.value,
      money: (parseInt(gasPrice) * 0.8).toFixed(2),
    })
  }

  handleOk = () => {
    router.push('/business/payment');
  }

  render() {
    const { tabsHeadAction, money, gasPrice } = this.state;

    return (
      <GridContent>
        <Suspense fallback={null}>
          <Card bordered={false} className={styles.card}>
            <div className={userInfoStyles.content}>
              <div className={userInfoStyles.head}>
                <Row type="flex" justify="space-between">
                  <Col span={11}>机械表用户</Col>
                  <Col span={11}>户号 20000088880000888800</Col>
                </Row>
              </div>
              <div className={userInfoStyles.userInfo}>
                <div className={userInfoStyles.userInfoList}>
                  <div>用户名</div>
                  <div>湖北省武汉市东西湖区东西湖四百五十三路东西湖家具建材大世界三期武</div>
                  <div>地址</div>
                  <div>湖北省武汉市东西湖区东西湖四百五十三路东西湖家具建材大世界三期武湖北省武汉市东西湖区东西湖四百五十三路东西湖家具建材大世界三期武</div>
                </div>
                <div className={userInfoStyles.userCard}>
                  <div className={userInfoStyles.userCardId}>
                    <span>物理卡号</span>
                    <span>20000088880000888800</span>
                  </div>
                  <div>账户余额</div>
                  <div>99,999,999,999.99</div>
                </div>
              </div>
              <div className={userInfoStyles.payment}>
                <div className='head'>充值缴费</div>
                <div className={userInfoStyles.paymentTabs}>
                  <div className='tabsHead'>
                    <span className={tabsHeadAction === 1 ? 'tabsHeadAction' : ''} onClick={() => this.handleChange(1)}>按金额购买</span>
                    <span className={tabsHeadAction === 2 ? 'tabsHeadAction' : ''} onClick={() => this.handleChange(2)}>按气量购买</span>
                  </div>
                  {
                    tabsHeadAction === 1 ?
                      <div className='tabsContent'>
                        <div className='tabsContentHead'>
                          <span>请输入购买金额 </span>
                          <span> 最大可购买999方</span>
                        </div>
                        <div className={userInfoStyles.tabsContentInput}>
                          <div>
                            <input type="text" value={money} onChange={this.handleSetGasPrice} />
                            <span>元</span>
                          </div>
                          <span className='tabsContentInputC'>=</span>
                          <span>{gasPrice}  方</span>
                        </div>
                        <div className={userInfoStyles.tabsContentBottom}>
                          <div>
                            <span>一阶梯 340方，已使用，本次未购买；</span>
                            <span>二阶梯 240方，已使用，本次未购买；</span>
                            <span>三阶梯无上限，3.54元/立方</span>
                          </div>
                          <Button onClick={this.handleOk}>确认购买</Button>
                        </div>
                      </div>
                      :
                      <div className='tabsContent'>
                        <div className='tabsContentHead'>
                          <span>请输入购买气量 </span>
                          <span> 最大可购买999方</span>
                        </div>
                        <div className={userInfoStyles.tabsContentInput}>
                          <div>
                            <input value={gasPrice} onChange={this.handleSetMoney} />
                            <span>方</span>
                          </div>
                          <span className='tabsContentInputC'>=</span>
                          <span>{money}  元</span>
                        </div>
                        <div className={userInfoStyles.tabsContentBottom}>
                          <div>
                            <span>一阶梯 340方，已使用，本次未购买；</span>
                            <span>二阶梯 240方，已使用，本次未购买；</span>
                            <span>三阶梯无上限，3.54元/立方</span>
                          </div>
                          <Button onClick={this.handleOk}>确认购买</Button>
                        </div>
                      </div>
                  }
                </div>
              </div>
            </div>
          </Card>
        </Suspense>
      </GridContent>
    );
  }
}

export default UserInfo;
