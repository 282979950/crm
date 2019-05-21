import React, { PureComponent } from 'react';
import styles from './index.less';
import moment from 'moment';
import { Typography } from 'antd';

const { Title } = Typography;

export default class GlobalHeaderRight extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    setInterval(function(){
      this.setState({
        time: new Date()
      });
    }.bind(this), 1000);
  }

  render() {
    const { time } = this.state;
    return (
      <div className={styles.right}>
        <span className={styles.time}>{"当前时间:" + moment(time).format('YYYY-MM-DD HH:mm:ss')}</span>
      </div>
    );
  }
}
