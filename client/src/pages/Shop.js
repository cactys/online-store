import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';

const Shop = () => {
  return (
    <Container>
      <Row>
        <Col md={3} className="mt-2">
          <TypeBar />
        </Col>
        <Col md={9} className="mt-2">
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
