import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Card, ListGroup, Row, Stack } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row md="auto" className="d-flex">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: 'pointer' }}
          border={brand.id === device.selectedBrand.id ? 'primary' : 'light'}
          key={brand.id}
          className="pt-1 pb-1"
          onClick={() => device.setSelectedBrand(brand)}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
