import React from 'react'
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';
import { useParams } from 'react-router-dom'
import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const ExchangeDetails = () => {
    const { coinId } = useParams();
    const { data, isFetching } = useGetExchangesQuery(coinId);
    const exchangesList = data?.data?.exchanges;
    if(isFetching) return <Loader />;
    
    return (
        <>
            <Row>
                <Col span={4}>Rank</Col>
                <Col span={6}>Name</Col>
                <Col span={4}>Price</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={4}>Number of Markets</Col>
            </Row>
            <Row>
                {exchangesList.map((exchange) => (
                <Col span={24}>
                    <Collapse>
                    <Panel
                        key={exchange.uuid}
                        showArrow={false}
                        header={(
                        <Row key={exchange.uuid}>
                            <Col span={3}>
                                <Text><strong>{exchange.rank}.</strong></Text>
                            </Col>
                            <Col span={7}>
                                <Avatar className="exchange-image" src={exchange.iconUrl} />
                                <Text><strong>{exchange.name}</strong></Text>
                            </Col>
                            <Col span={5}>${Number(exchange.price).toFixed(2)}</Col>
                            <Col span={6}>${millify(exchange['24hVolume'])}</Col>
                            <Col span={1}>{millify(exchange.numberOfMarkets)}</Col>
                        </Row>
                        )}
                    >
                       Want to know more about <a href={exchange.coinrankingUrl} target="_blank" rel="noreferrer">{exchange.name} </a> !
                    </Panel>
                    </Collapse>
                </Col>
                ))}
            </Row>
        </>
    )
}

export default ExchangeDetails