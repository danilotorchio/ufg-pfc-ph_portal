import type { ParentComponent } from 'solid-js';

import LogoGoogle from '../../../assets/media/logos/google-icon.svg';

const Login: ParentComponent = () => {
  return (
    <>
      <div class="w-lg-500px p-10">
        <form class="form w-100" novalidate={true} id="kt_sign_in_form" action="#">
          <div class="text-center mb-11">
            <h1 class="text-dark fw-bolder mb-3">Login</h1>
          </div>
          <div class="row g-3 mb-9">
            <div class="col-md-12">
              <a href="#" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100">
                <img alt="Logo" src={LogoGoogle} class="h-15px me-3" />
                Login com Google
              </a>
            </div>
          </div>
          <div class="separator separator-content my-14">
            <span class="w-150px text-gray-500 fw-semibold fs-7">Ou com e-mail</span>
          </div>
          <div class="fv-row mb-8">
            <input type="text" placeholder="E-mail" name="email" autocomplete="off" class="form-control bg-transparent" />
          </div>
          <div class="fv-row mb-3">
            <input type="password" placeholder="Senha" name="password" autocomplete="off" class="form-control bg-transparent" />
          </div>
          <div class="d-grid mb-10">
            <button type="submit" id="kt_sign_in_submit" class="btn btn-primary">
              <span class="indicator-label">Entrar</span>
            </button>
          </div>
          <div class="text-gray-500 text-center fw-semibold fs-6">
            Ainda não possui cadastro?
            <a href="../../demo30/dist/authentication/layouts/corporate/sign-up.html" class="link-primary">
              <span></span> Cadastre-se
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
