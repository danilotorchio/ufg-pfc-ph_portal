import { Component, createEffect } from 'solid-js';
import { A } from '@solidjs/router';

import { useFirebase } from '../utils/firebase';

import Logo from '../../assets/media/logos/ufg.svg';
import Avatar from '../../assets/media/avatars/300-11.jpg';

const Header: Component = () => {
  const { auth } = useFirebase();

  createEffect(() => KTMenu.createInstances());

  const handleLogout = () => auth.signOut();

  return (
    <div
      id="kt_app_header"
      class="app-header"
      data-kt-sticky="true"
      data-kt-sticky-activate="{default: false, lg: true}"
      data-kt-sticky-name="app-header-sticky"
      data-kt-sticky-offset="{default: false, lg: '300px'}"
    >
      <div
        class="app-container container-xxl d-flex align-items-stretch justify-content-between"
        id="kt_app_header_container"
      >
        <div class="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show sidebar menu">
          <div class="btn btn-icon btn-active-color-primary w-35px h-35px" id="kt_app_header_menu_toggle">
            <span class="svg-icon svg-icon-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                  fill="currentColor"
                />
                <path
                  opacity="0.3"
                  d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-lg-15">
          <A href="/">
            <img alt="Logo" src={Logo} class="h-35px h-sm-50px d-sm-inline app-sidebar-logo-default theme-light-show" />
          </A>
        </div>

        <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1" id="kt_app_header_wrapper">
          <div class="app-header-menu app-header-mobile-drawer align-items-stretch">
            <div
              class="menu menu-state-primary menu-column menu-lg-row menu-title-gray-700 menu-icon-gray-500 menu-arrow-gray-500 menu-bullet-gray-500 my-5 my-lg-0 align-items-stretch fw-semibold px-2 px-lg-0"
              id="kt_app_header_menu"
            >
              <A
                href="/area/dashboard"
                activeClass="here"
                end={true}
                class="menu-item menu-here-bg menu-lg-down-accordion me-0 me-lg-2"
              >
                <span class="menu-link">
                  <span class="menu-title">Dashboard</span>
                  <span class="menu-arrow d-lg-none"></span>
                </span>
              </A>
              <A
                href="/area/report"
                activeClass="here"
                end={true}
                class="menu-item menu-lg-down-accordion me-0 me-lg-2"
              >
                <span class="menu-link">
                  <span class="menu-title">Relatórios</span>
                  <span class="menu-arrow d-lg-none"></span>
                </span>
              </A>
            </div>
          </div>

          <div class="app-navbar flex-shrink-0">
            <div class="app-navbar-item ms-5" id="kt_header_user_menu_toggle">
              <div
                class="cursor-pointer symbol symbol-35px symbol-md-45px"
                data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                data-kt-menu-attach="parent"
                data-kt-menu-placement="bottom-end"
              >
                <img class="symbol symbol-circle symbol-35px symbol-md-45px" src={Avatar} alt="user" />
              </div>
              <div
                class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                data-kt-menu="true"
              >
                <div class="menu-item px-3">
                  <div class="menu-content d-flex align-items-center px-3">
                    <div class="symbol symbol-50px me-5">
                      <img alt="Logo" src={Avatar} />
                    </div>
                    <div class="d-flex flex-column">
                      <div class="fw-bold d-flex align-items-center fs-5">
                        {auth.currentUser.displayName}
                        <span class="badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2">Pro</span>
                      </div>
                      <a href="#" class="fw-semibold text-muted text-hover-primary fs-7">
                        {auth.currentUser.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div class="separator my-2"></div>
                <div class="menu-item px-5 my-1">
                  <a href="../../demo30/dist/account/settings.html" class="menu-link px-5">
                    Minha conta
                  </a>
                </div>
                <div class="menu-item px-5">
                  <a href="javascript:;" class="menu-link px-5" onClick={handleLogout}>
                    Sair
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
