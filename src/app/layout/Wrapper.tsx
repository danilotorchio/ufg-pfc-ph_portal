import type { ParentComponent } from 'solid-js';

import Summary from '../components/Summary';
import Footer from './Footer';

const Wrapper: ParentComponent = (props) => (
  <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
    <Summary />

    <div class="app-container container-xxl">
      <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
        <div class="d-flex flex-column flex-column-fluid">
          <div id="kt_app_content" class="app-content flex-column-fluid">
            {props.children}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  </div>
);

export default Wrapper;
