import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
function IndexPage() {
  return (
    <div className={styles.normal}>
      <WingBlank>
        <Button>default</Button><WhiteSpace />
        <Button disabled>default disabled</Button><WhiteSpace />
        <Button type="primary">primary</Button><WhiteSpace />
        <Button type="primary" disabled>primary disabled</Button><WhiteSpace />

        <Button type="warning">warning</Button><WhiteSpace />
        <Button type="warning" disabled>warning disabled</Button><WhiteSpace />

        <Button loading>loading button</Button><WhiteSpace />
        <Button icon="check-circle-o">with icon</Button><WhiteSpace />
        <Button icon={<img src="https://gw.alipayobjects.com/zos/rmsportal/jBfVSpDwPbitsABtDDlB.svg" alt="" />}>with custom icon</Button><WhiteSpace />
        <Button icon="check-circle-o" inline size="small" style={{ marginRight: '4px' }}>with icon and inline</Button>
        <Button icon="check-circle-o" inline size="small">with icon and inline</Button>
      </WingBlank>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
