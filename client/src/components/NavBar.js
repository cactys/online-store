import React, { useContext } from 'react';
import { Context } from '..';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from '../utils/consts';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  const history = useHistory();

  return (
    <Navbar bg='primary' variant='primary'>
      <Container>
        <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>
          купиДевайс
        </NavLink>
        {user.isAuth ? (
          <Nav className='ml-auto' stype={{ color: 'whie' }}>
            <Button
              variant='outline-light'
              onClick={() => history.push(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant='outline-light'
              onClick={() => history.push(LOGIN_ROUTE)}
              className='ms-2'
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className='ml-auto' stype={{ color: 'whie' }}>
            <Button
              variant='outline-light'
              onClick={() => history.push(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
            <Button
              variant='outline-light'
              onClick={() => history.push(REGISTRATION_ROUTE)}
              className='ms-2'
            >
              Регистрация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
