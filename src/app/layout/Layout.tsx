import type { Component } from 'solid-js';
import { Outlet } from '@solidjs/router';

import Header from './Header';
import Wrapper from './Wrapper';

const Layout: Component = () => {
  return (
    <>
      <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
        <Header />

        <Wrapper>
          <Outlet />
        </Wrapper>
      </div>
    </>
  );
};

export default Layout;
