import { Component } from 'solid-js';

import Chart from './Chart';

const Dashboard: Component = () => {
  // prettier-ignore
  return (
    <div id="kt_app_content_container">
      <div class="row">
        <div class="col-12">
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
