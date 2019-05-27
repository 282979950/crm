import React, { PureComponent } from 'react';
import styles from './index.less';
import { Button, Icon } from 'antd';


export default class GlobalHeaderRight extends PureComponent {

  render() {
    return (
      <div className={styles.right}>
        <Button type="primary" shape="round" icon="rollback" size="large">
          返回
        </Button>
      </div>
    );
  }
}
