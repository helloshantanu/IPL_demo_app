/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Carousel, Layout, Image } from 'antd';
import './style.css';
import SearchBox from '../../components/SearchBox/Loadable';
import InfoTable from '../../components/InfoTable/Loadable';

import img1 from '../../images/4.jpg';
import img2 from '../../images/2.png';
import img3 from '../../images/ipl.jpg';
import img4 from '../../images/RON_3829.png';
export default function HomePage() {
  const contentStyle = {
    height: '450px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const { Header, Content, Footer } = Layout;

  return (
    <>
      <Layout className="layout">
        <Header>
          <div className="logo">
            <img
              alt="IPL_logo"
              src="data:image/png;base64,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"
              width="100px"
            />
          </div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Carousel autoplay>
            <div>
              <Image src={img2} width={1800} height={500} />
            </div>
            <div>
              <Image src={img3} width={1800} height={500} />
            </div>
            <div>
              <Image src={img1} width={1800} height={500} />
            </div>
            <div>
              <Image src={img4} width={1800} height={500} />
            </div>
          </Carousel>
          <SearchBox />
          <InfoTable />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Created by
          <a href="https://github.com/helloshantanu"> @Helloshantanu</a>
        </Footer>
      </Layout>
    </>
  );
}
