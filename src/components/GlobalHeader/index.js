import React, { PureComponent } from 'react';
import Debounce from 'lodash-decorators/debounce';
import styles from './index.less';
import RightContent from './RightContent';
import logo from '../../assets/武天logo.jpg';

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
        <img className={styles.logo} src={logo} alt="logo" height={48}/>
        <RightContent {...this.props} />
      </div>
    );
  }
}
