import { ParentComponent } from 'solid-js';

import Header from './Header';
import Wrapper from './Wrapper';

const Layout: ParentComponent = (props) => {
  return (
    <>
      <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
        <Header />
        <Wrapper>{props.children}</Wrapper>
      </div>
    </>
  );
};

export default Layout;
