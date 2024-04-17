// src/app/page.tsx

import React from 'react';
import './globals.css'; // Tuodaan globaalit tyylitiedostot
import Sidebar from './layout';

const Page = () => {
  return (
    <div className="app">
      <Sidebar />
    </div>
  );
};

export default Page;

