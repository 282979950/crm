import React, { Component, Suspense } from 'react';
import {Card, Row, Col, Icon, Input, Button} from 'antd';
import GridContent from '../../components/PageHeaderWrapper/GridContent';
import styles from './default.less';
import userQueryStyles from './UserQuery.less';
import router from "umi/router";

class ChooseService extends Component {

  handleSearch = () => {
    const {form, dispatch} = this.props;
    form.validateFields((err) => {
      if (err) return;
      dispatch({
        type: 'business/queryUserInfoByUserNo',
        payload: {
          userId: form.getFieldValue("userId")
        },
      });
    });
  };

  render() {
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Card bordered={false} className={styles.card}>
            <Row className={userQueryStyles.row} gutter={48}>
              <Col span={18} offset={3} >
                <Card bordered={false} className={userQueryStyles.mainCard}>
                  <div className={userQueryStyles.title}>用户信息查询</div>
                  <Row>
                    <Col span={12} offset={6} className={userQueryStyles.col}>
                      <div className={userQueryStyles.content}>请输入户号或插入燃气卡直接登录</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8} offset={8} className={userQueryStyles.col}>
                      <Input
                        placeholder="请输入户号"
                        size="large"
                        className={userQueryStyles.input}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col span={8} offset={8} className={userQueryStyles.col}>
                      <Button type="primary" shape="round" icon="search" size="large" className={userQueryStyles.btn}>
                        查询
                      </Button>
                    </Col>
                  </Row>
                  <Row className={userQueryStyles.tips}>
                    <Col span={8} >
                      <Card bordered={false} className={userQueryStyles.tipCard} bodyStyle={{ borderRadius: '50px', backgroundColor:'#D8D8D8',margin: '0 50px' }}>
                        <Icon type="credit-card" className={userQueryStyles.icon}/>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card bordered={false} className={userQueryStyles.tipCard} bodyStyle={{ borderRadius: '50px', backgroundColor:'#D8D8D8',margin: '0 50px' }}>
                        <Icon type="credit-card" className={userQueryStyles.icon}/>
                      </Card>
                    </Col>
                    <Col span={8}>
                      <Card bordered={false} className={userQueryStyles.tipCard} bodyStyle={{ borderRadius: '50px', backgroundColor:'#D8D8D8',margin: '0 50px' }}>
                        <Icon type="credit-card" className={userQueryStyles.icon}/>
                      </Card>
                    </Col>
                  </Row>
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
