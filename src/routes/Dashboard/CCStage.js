import React, { Component } from 'react';
import { Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd';
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts';
import styles from './Analysis.less';
import cc, { CcFragment } from 'react-control-center';

function getIconGroup() {
  const menu = (
    <Menu>
      <Menu.Item>操作一</Menu.Item>
      <Menu.Item>操作二</Menu.Item>
    </Menu>
  );

  const iconGroup = (
    <span className={styles.iconGroup}>
      <Dropdown overlay={menu} placement="bottomRight">
        <Icon type="ellipsis" />
      </Dropdown>
    </span>
  );
  return menu;
}
const iconGroup = getIconGroup();

@cc.connect('CcStage', { 'chart/*': '' }, { module: 'ccStage', sharedStateKeys: '*', isSingle: true })
export default class CcStage extends Component {

  state = {
    loading: false,
    salesType: 'all',
  }

  componentDidMount() {
    this.$$on('foo', (p1, p2) => {
      alert(`receive ${p1}, ${p2}`);
    });
  }

  emitFoo = () => {
    this.$$emit('foo', 'emit foo!!', Date.now());
  }

  render() {
    console.log('%c@@@ CcStage', 'color:green;border:1px solid green;');
    const { salesType, loading, inputValue } = this.state;
    const {
      salesTypeData,
      salesTypeDataOnline,
      salesTypeDataOffline,
    } = this.$$propState;

    const salesPieData = salesType === 'all' ?
      salesTypeData
      :
      (salesType === 'online' ? salesTypeDataOnline : salesTypeDataOffline);

    return (
      <div>
        <input data-cct="changeInputValue" onChange={this.$$domDispatch} value={inputValue} />
        <Button onClick={this.emitFoo}>emit</Button>
        <Row>
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Card
              loading={loading}
              className={styles.salesCard}
              bordered={false}
              title="销售额类别占比"
              bodyStyle={{ padding: 24 }}
              extra={(
                <div className={styles.salesCardExtra}>
                  {iconGroup}
                  <div className={styles.salesTypeRadio}>
                    <Radio.Group value={salesType} onChange={this.handleChangeSalesType}>
                      <Radio.Button value="all">全部渠道</Radio.Button>
                      <Radio.Button value="online">线上</Radio.Button>
                      <Radio.Button value="offline">门店</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
              )}
              style={{ marginTop: 24, minHeight: 509 }}
            >
              <h4 style={{ marginTop: 8, marginBottom: 32 }}>销售额</h4>
              <Pie
                hasLegend
                subTitle="销售额"
                total={yuan(salesPieData.reduce((pre, now) => now.y + pre, 0))}
                data={salesPieData}
                valueFormat={val => yuan(val)}
                height={248}
                lineWidth={4}
              />
              <CcFragment connect={{ 'ccStage/*': '' }}>
                {
                  ({ propState }) => (
                    <div>
                      {propState.ccStage.inputValue}
                    </div>
                  )
                }
              </CcFragment>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }

}
