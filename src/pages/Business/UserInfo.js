import React, { Component, Suspense } from 'react';
import {Input, Card, Layout, Typography} from 'antd';
import GridContent from '@/components/PageHeaderWrapper/GridContent';
import styles from './Welcome.less';
import Header from "../../layouts/Header";
import logo from "../../assets/lanyan-logo-rect.svg";
import router from "umi/router";

const { Title } = Typography;
const { Meta } = Card;
const { Content } = Layout;

class UserInfo extends Component {

  render() {
    return (
      <GridContent>
        <Suspense fallback={null}>
          <Card bordered={false} className={styles.card}>
            <Layout>
              <Header logo={logo}/>
              <Content>
                <Title>请输入用户户号</Title>
                <Input />
              </Content>
            </Layout>
          </Card>
        </Suspense>
      </GridContent>
    );
  }
}

export default UserInfo;
