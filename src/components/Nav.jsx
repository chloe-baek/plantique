import React from 'react';
import { Link } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr';
import User from './User';
import Button from './ui/Button';
import { useUserContext } from '../context/UserContext';
import CartStatus from './CartStatus';

export default function Nav() {
  const { user, login, logout } = useUserContext();
  const handleLogin = () => {
    login();
  };
  const handleLogout = () => {
    logout();
  };
  return (
    <header className='flex justify-between border-b border-primary p-3'>
      <Link
        to='/'
        className='flex items-center text-5xl text-primary font-serif'
      >
        <h1>Plantique</h1>
      </Link>
      <nav className='flex items-center gap-4 font-semibold'>
        <Link to='/products'>Products</Link>
        {user && (
          <Link to='/carts'>
            <CartStatus />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to='/products/new' className='text-2xl text-primary'>
            <GrAddCircle />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={'Login'} onClick={handleLogin} />}
        {user && <Button text={'Logout'} onClick={handleLogout} />}
      </nav>
    </header>
  );
}
