import type { Component } from 'solid-js';
import { Outlet } from '@solidjs/router';

import LogoUFG from '../../../assets/media/logos/ufg.svg';
import AuthImageBg from '../../../assets/media/misc/vaca.jpeg';

const asideStyles = {
  'background-image': `url(${AuthImageBg})`,
  opacity: '0.85',
};

const AuthLayout: Component = () => {
  // prettier-ignore
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
      <div class="d-flex flex-lg-row-fluid w-lg-50 bgi-size-cover bgi-position-right order-1 order-lg-2" style={asideStyles}>
        <div class="d-flex flex-column flex-end py-7 py-lg-15 px-5 px-md-15 w-100">
          <img alt="Logo" src={LogoUFG} class="h-60px h-lg-75px my-5 my-sm-0 mb-sm-5" />

          <h1 class="d-none d-lg-block text-white fs-2qx fw-bolder text-center mb-7">Rápido, Eficiente e Produtivo</h1>

          <div class="d-none d-lg-block text-white fs-base text-end">
            Desenvolvido por:
            <a href="https://linkedin.com/in/danilotorchio" class="opacity-75-hover text-white fw-bold me-1" target="_blank" rel="noreferrer">
              <span></span> Danilo Torchio
            </a>
            <br />
            Photo by
            <a href="https://www.pexels.com/pt-br/foto/gado-marrom-na-grama-verde-durante-o-dia-162240/" class="opacity-75-hover text-warning fw-bold me-1" target="_blank" rel="noreferrer">
              <span></span> Pixabay
            </a>
          </div>
        </div>
      </div>
      {/* end::Aside */}
    </div>
  );
};

export default AuthLayout;
