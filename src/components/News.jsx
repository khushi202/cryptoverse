import React, { useState } from 'react';
import { Select, Typography, Row, Col, Card, Avatar } from 'antd';
import moment from 'moment';
import newsImg from '../images/crptonewz.jpg'

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text, Title } = Typography;
const { Option } = Select;

const News = () => {
  const { data: cryptoNews } = useGetCryptoNewsQuery(100);
  const [simplified, setSimplified] = useState(true); // Initialize simplified as true
  
  if (!cryptoNews) return <Loader />;

  const firstTenNews = cryptoNews.slice(0, 10);
  const allNews = cryptoNews.slice(11, 49);

  

  return (
    <div>
      <Select
        defaultValue="simplified"
        onChange={(value) => setSimplified(value === 'simplified')}
      >
        <Option value="simplified">Simplified View</Option>
        <Option value="full">Full View</Option>
      </Select>
      <Row gutter={[24, 24]}>
        {simplified && (
          firstTenNews.map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className='news-card'>
                <a a href={news.url} target='_blank' rel='noreferrer'>
                  <div className='news-image-container'>
                    <Title className='news-title' level={4}>{news.title}</Title>
                    <img className='image1' src={newsImg} alt="" />
                  </div>
                  <p>
                    {news.description.length > 200 ? `${news.description.substring(0, 200)}...` : news.description}
                  </p>
                  <div className="provider-container">
                    <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
                  </div>
                </a>
              </Card>
            </Col>
          ))
        )}
        {!simplified && (
          allNews.map((news, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className='news-card'>
                <a href={news.url} target='_blank' rel='noreferrer'>
                  <div className='news-image-container'>
                    <Title className='news-title' level={4}>{news.title}</Title>
                    <img className='image1' src={newsImg} alt="" />
                  </div>
                  <p>
                    {news.description.length > 100 ? `${news.description.substring(0, 150)}...` : news.description}
                  </p>
                  <div className="provider-container">
                    <Text>{moment(news.date).startOf('ss').fromNow()}</Text>
                  </div>
                </a>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default News;
