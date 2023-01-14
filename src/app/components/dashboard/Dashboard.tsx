import { Component } from 'solid-js';
import Chart from './Chart';

const Dashboard: Component = () => {
  // prettier-ignore
  return (
    <div id="kt_app_content_container">
      <div class="row">
        <div class="col-12">
          <div class="card card-xl-stretch">
            <div class="card-header border-0 pt-5">
              <h3 class="card-title align-items-start flex-column">
                <span class="card-label fw-bold fs-3 mb-1">Leituras realizadas</span>
                <span class="text-muted fw-semibold fs-7">Mostra as últimas 15 leituras em tempo real</span>
              </h3>
              <div class="card-toolbar" data-kt-buttons="true">
                <a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1">10</a>
                <a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1 active">15</a>
                <a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">30</a>
              </div>
            </div>
            <div class="card-body">
              <Chart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
