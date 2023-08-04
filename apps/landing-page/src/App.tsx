import React from 'react';
import {
  AppShell
} from '@mantine/core';
import { LandingHeader, HeroBanner, Welcome, Features, RegisterBanner, EmployeeBanner, Footer } from './containers';

function App() {
  return (
    <AppShell padding={0}>
      <LandingHeader />
      <HeroBanner />
      <Welcome />
      <Features />
      <RegisterBanner />
      <EmployeeBanner />
      <Footer />
    </AppShell>
  );
}

export default App;
