import React, { Component, Suspense } from 'react';
import { Card, Row, Col, Icon, Button, Form, Input } from 'antd';
import router from "umi/router";
import GridContent from '../../components/PageHeaderWrapper/GridContent';
import styles from './default.less';
import userQueryStyles from './UserQuery.less';
import {connect} from "dva";

@connect(({ business, loading }) => ({
  business,
  loading: loading.models.business,
}))
@Form.create()
class UserQuery extends Component {

  handleSearch = () => {
    const { form, dispatch } = this.props;
    form.validateFields((err, values) => {
      if (err) return;
      dispatch({
        type: 'business/queryUserInfoByUserNo',
        payload: {
          userId: form.getFieldValue("userId")
        },
        callback: (response) => {
          if(response.data.meterType === "1") {
            // 机械表
            router.push("/business/mechanicalUserInfo");
          } else {
            // IC卡表
            router.push("/business/icUserInfo");
          }
        }
      });
    });
  };

  render() {
    const {form: {getFieldDecorator}} = this.props;
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Card bordered={false} className={styles.card}>
            <div className={userQueryStyles.row}>
              <div className={userQueryStyles.title}>用户信息查询</div>
              <div className={userQueryStyles.content}>请输入户号或插入燃气卡直接登录</div>
              <div className={userQueryStyles.input}>
                <span>户号</span>
                <Form.Item>
                  {getFieldDecorator('userId')(
                    <Input autoComplete='off'/>
                  )}
                </Form.Item>
              </div>
              <Button className={userQueryStyles.btn} onClick={this.handleSearch}>查询</Button>
              <Row className={userQueryStyles.tips} type="flex" justify="space-around">
                <Col>
                  <Icon type="credit-card" className={userQueryStyles.icon} />
                </Col>
                <Col>
                  <Icon type="credit-card" className={userQueryStyles.icon} />
                </Col>
                <Col>
                  <Icon type="credit-card" className={userQueryStyles.icon} />
                </Col>
              </Row>
            </div>
          </Card>
        </Suspense>
      </GridContent>
    );
  }
}

export default UserQuery;
