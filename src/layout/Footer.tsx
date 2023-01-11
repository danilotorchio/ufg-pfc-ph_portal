import { Component } from 'solid-js';

const Footer: Component = () => {
  return (
    <div id="kt_app_footer" class="app-footer py-2 py-lg-4">
      <div class="app-container container-xxl d-flex flex-column flex-md-row flex-center flex-md-stack">
        <div class="text-dark order-2 order-md-1">
          <span class="text-muted fw-semibold me-1">2023&copy;</span>
          <a href="https://keenthemes.com" target="_blank" class="text-gray-800 text-hover-primary">
            UFG/EMC - Escola de Engenharia Elétrica, Mecânica e de Computação (EMC)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
