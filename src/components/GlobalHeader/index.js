import React, { PureComponent } from 'react';
import Debounce from 'lodash-decorators/debounce';
import styles from './index.less';
import RightContent from './RightContent';
import logoText from '../../assets/logo-text.png';
import logo from '../../assets/logo.png';

export default class GlobalHeader extends PureComponent {

  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }
  /* eslint-disable*/
  @Debounce(600)
  triggerResizeEvent() {
    // eslint-disable-line
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  render() {
    const { collapsed } = this.props;
    return (
      <div className={styles.header}>
        <img className={styles.logoText} src={logoText}/>
        <img className={styles.logo} src={logo}/>
        <span className={styles.title}>天然气自助服务平台</span>
        <RightContent {...this.props} />
      </div>
    );
  }
}
