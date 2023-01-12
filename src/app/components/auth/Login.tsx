import { type ParentComponent } from 'solid-js';
import { A } from '@solidjs/router';

import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';

import { useFirebase } from '../../utils/firebase';
import LogoGoogle from '../../../assets/media/logos/google-icon.svg';

const Login: ParentComponent = () => {
  const { auth } = useFirebase();

  const handleSubmit = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence).then(async () => {
        await signInWithEmailAndPassword(auth, '', '');
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSiginWithGoogle = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence).then(async () => {
        await signInWithPopup(auth, new GoogleAuthProvider());
      });
    } catch (error) {
      console.error(error);
    }
  };

  // prettier-ignore
  return (
    <div class="w-lg-500px p-10 animate__animated animate__fadeIn">
      <form class="form w-100" novalidate={true} id="kt_sign_in_form">
        <div class="text-center mb-11">
          <h1 class="text-dark fw-bolder mb-3">Login 🚀</h1>
        </div>
        <div class="row g-3 mb-9">
          <div class="col-md-12">
            <button type="button" class="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-primary bg-state-light flex-center text-nowrap w-100" onclick={handleSiginWithGoogle}>
              <img alt="Logo" src={LogoGoogle} class="h-15px me-3" />
              Login com Google
            </button>
          </div>
        </div>
        <div class="separator separator-content my-14">
          <span class="w-150px text-gray-500 fw-semibold fs-7">Ou com e-mail</span>
        </div>
        <div class="fv-row mb-8">
          <input type="text" placeholder="E-mail" name="email" autocomplete="off" class="form-control bg-transparent" />
        </div>
        <div class="fv-row mb-8">
          <input type="password" placeholder="Senha" name="password" autocomplete="off" class="form-control bg-transparent" />
        </div>
        <div class="d-grid mb-10">
          <button type="button" id="kt_sign_in_submit" class="btn btn-primary" onclick={handleSubmit}>
            <span class="indicator-label">Entrar</span>
          </button>
        </div>
        <div class="text-gray-500 text-center fw-semibold fs-6">
          Ainda não possui cadastro?
          <A href={'/auth/register'} class="link-primary">
            <span></span> Cadastre-se
          </A>
        </div>
      </form>
    </div>
  );
};

export default Login;
