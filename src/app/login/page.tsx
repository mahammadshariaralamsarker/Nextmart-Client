import LoginForm from '@/components/modules/auth/login/LoginForm';
import React from 'react';

const loginPage = () => {
  return (
    <div className='h-screen w-screen grid place-items-center'>
      <LoginForm/>
    </div>
  );
};

export default loginPage;