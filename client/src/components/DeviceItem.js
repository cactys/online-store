import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import star from '../assets/star.png';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const hisrtory = useHistory();

  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => hisrtory.push(DEVICE_ROUTE + '/' + device.id)}
    >
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        {/* <Card.Header>{device.name}</Card.Header> */}
        <Image width={150} height={150} src={device.img} />
        <div className="text-black-50 mt-2 d-flex justify-content-between align-items-center">
          <div>{device.price}</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={12} height={12} src={star} className="ms-1" />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
