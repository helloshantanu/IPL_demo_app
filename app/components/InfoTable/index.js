import React from 'react';
import { Row, Col, Card, Image } from 'antd';
import img from '../../images/0001.jpg';
import TrendinNews from '../TrendingNews/Loadable';
import Pointstable from '../PointsTable/Loadable';
import UpcomingMatches from '../UpcomingMatches/Loadable';
const tabListNoTitle = [
  {
    key: 'News',
    tab: 'Trending News',
  },
  {
    key: 'Schedule',
    tab: '2021 Schedule',
  },
  {
    key: 'UpcomingMatches',
    tab: 'Upcoming Matches',
  },
];
const contentListNoTitle = {
  News: <TrendinNews />,
  Schedule: <Image src={img} />,
  UpcomingMatches: <UpcomingMatches />,
};

export default class TabsCard extends React.Component {
  state = {
    noTitleKey: 'News',
  };

  onTabChange = (key, type) => {
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
        <Row justify="center" style={{ marginTop: '30px' }} gutter={16}>
          <Col span={14}>
            <Card
              style={{ width: '100%' }}
              tabList={tabListNoTitle}
              activeTabKey={this.state.noTitleKey}
              tabBarExtraContent={<a href="https://www.iplt20.com/">More</a>}
              onTabChange={key => {
                this.onTabChange(key, 'noTitleKey');
              }}
            >
              {contentListNoTitle[this.state.noTitleKey]}
            </Card>
          </Col>
          <Col span={5}>
            <Card
              style={{ width: '100%' }}
              title="Points Table"
              tabBarExtraContent={<a href="https://www.iplt20.com/">More</a>}
            >
              <Pointstable />
            </Card>
            <Card
              style={{ width: '100%', marginTop: '30px' }}
              title="Points Table"
              tabBarExtraContent={<a href="https://www.iplt20.com/">More</a>}
            >
              <Pointstable />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
