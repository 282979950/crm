import React, { Component, Suspense } from 'react';
import { Button, Input, Card, Layout, Typography, Form, Col} from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './Welcome.less';
import Header from "../../layouts/Header";
import logo from "../../assets/lanyan-logo-rect.svg";
import router from "umi/router";

const { Title } = Typography;
const { Meta } = Card;
const { Content } = Layout;

@Form.create()
class UserNoInput extends Component {

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props;
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Card bordered={false} className={styles.card}>
            <Layout>
              <Header logo={logo}/>
              <Content>
                <Title>请输入用户户号</Title>
                <Col md={3} sm={12} style={{ paddingLeft: 0, paddingRight: 8 }}>
                  {getFieldDecorator('userId', {
                    rules: [{
                      pattern: /^[0-9]+$/,
                      message: '户号只能为整数',
                    }]
                  })(<Input placeholder="户号" />)}
                </Col>
                <Button type='primary' size='large'>查询</Button>
              </Content>
            </Layout>
          </Card>
        </Suspense>
      </GridContent>
    );
  }
}

export default UserNoInput;
