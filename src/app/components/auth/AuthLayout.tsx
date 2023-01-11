import type { Component } from 'solid-js';
import { Outlet } from '@solidjs/router';

import LogoUFG from '../../../assets/media/logos/ufg.svg';

const AuthLayout: Component = () => {
  return (
    <div class="d-flex flex-column flex-lg-row flex-column-fluid">
      {/* begin::Body */}
      <div class="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
        <div class="d-flex flex-center flex-column flex-lg-row-fluid">
          <Outlet />
        </div>
      </div>
      {/* end::Body */}

      {/* begin::Aside */}
      <div class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-right order-1 order-lg-2" style="background-image: url(/src/assets/media/misc/vaca.jpeg); opacity: 0.85;">
        <div class="d-flex flex-column flex-end py-7 py-lg-15 px-5 px-md-15 w-100">
          <img alt="Logo" src={LogoUFG} class="h-60px h-lg-75px my-5 my-sm-0 mb-sm-5" />

          <h1 class="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">Rápido, Eficiente e Produtivo</h1>

          <div class="d-none d-lg-block text-white fs-base text-end">
            Portal para para visualização dos dados coletados pela sonda de pH.
            <br />
            Desenvolvido por: <strong>Danilo Torchio</strong>
          </div>
        </div>
      </div>
      {/* end::Aside */}
    </div>
  );
};

export default AuthLayout;
