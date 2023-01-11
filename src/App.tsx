import type { Component } from 'solid-js';
import { Navigate, Route, Routes } from '@solidjs/router';

import Layout from './layout/Layout';
import Dashboard from './Components/Home';

const App: Component = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/dashboard" component={Dashboard} />

        <Route path="**" element={<Navigate href="/dashboard" />} />
      </Routes>
    </Layout>
  );
};

export default App;
