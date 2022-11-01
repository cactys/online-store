import React from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import bigStar from '../assets/bigStar.jpg';

const DevicePage = () => {
  const device = {
    id: 1,
    name: 'Iphone 12 pro',
    price: 25000,
    rating: 2,
    img: 'https://proinside.net/wa-data/public/shop/img/iphone-12-pro-blue-10.jpg',
  };
  return (
    <Container className="mt-2">
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} className="img-fluid" />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
            <h2>{device.name}</h2>
            <div
              className="d-flex align-items-center justify-content-center"
              style={{
                background: `url(${bigStar}) no-repeat center center`,
                width: 240,
                height: 240,
                backgroundSize: 'cover',
                fontSize: 64,
              }}
            >
              <div>{device.rating}</div>
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column aligh-items-center justify-content-around"
            style={{
              width: 300,
              height: 300,
              fontSize: 32,
              border: '5px solid lightgray',
            }}
          >
            <h3>От: {device.price} руб.</h3>
            <Button variant={'outline-dark'}>Добавить в корзину</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DevicePage;
