/* eslint-disable react/prop-types */
import React from 'react';
import { Row, Col, Card } from 'antd';
import { newsData } from './newsData';

function NewsItems(props) {
  const content = props.data;

  const [loading, setLoading] = React.useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <Row align="middle" key={content.id}>
      <Col span={4}>
        <img width={150} alt="ipl_img" src={content.imgUrl} />
      </Col>
      <Col span={20}>
        <Card
          size="small"
          title={content.title}
          extra={<a href={content.href}>More</a>}
          bordered={false}
          loading={loading}
        >
          <p>{content.data}</p>
          <p>{content.date}</p>
        </Card>
      </Col>
    </Row>
  );
}

export default function TrendinNews() {
  return newsData.map(item => <NewsItems data={item} />);
}
