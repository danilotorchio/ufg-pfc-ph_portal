import { Component, createSignal, Show } from 'solid-js';
import { createStore } from 'solid-js/store';

import { A } from '@solidjs/router';
import { browserSessionPersistence, createUserWithEmailAndPassword, setPersistence } from 'firebase/auth';

import { useFirebase } from '../../utils/firebase';

type FormData = {
  email: string;
  password: string;
};

const Register: Component = () => {
  const [loading, setLoading] = createSignal(false);
  const { auth } = useFirebase();

  const [form, setForm] = createStore<FormData>({
    email: '',
    password: '',
  });

  const updateFormField = (fieldName: 'email' | 'password') => {
    return (event: Event) => setForm({ [fieldName]: (event.currentTarget as HTMLInputElement).value });
  };

  const handleSubmit = async (evt: SubmitEvent) => {
    evt.preventDefault();
    setLoading(true);

    try {
      await setPersistence(auth, browserSessionPersistence).then(
        async () => await createUserWithEmailAndPassword(auth, form.email, form.password)
      );
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  // prettier-ignore
  return (
    <div class="w-lg-500px p-10 animate__animated animate__fadeIn">
      <form class="form w-100" novalidate={true} id="kt_sign_up_form" onSubmit={handleSubmit}>
        <div class="text-center mb-11">
          <h1 class="text-dark fw-bolder mb-3">Registro 🚀</h1>
        </div>
        <div class="fv-row mb-8">
          <input type="text" placeholder="E-mail" name="email" autocomplete="off" class="form-control bg-transparent" value={form.email} onChange={updateFormField('email')} />
        </div>
        <div class="fv-row mb-8">
          <input type="password" placeholder="Senha" name="password" autocomplete="off" class="form-control bg-transparent" value={form.password} onChange={updateFormField('password')} />
        </div>
        <div class="d-grid mb-10">
          <button type="submit" id="kt_sign_in_submit" class="btn btn-primary" disabled={loading()}>
            <Show when={!loading()} fallback={
              <span>
                Aguarde... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            }>
              <span>Registrar</span>
            </Show>
          </button>
        </div>
        <div class="text-gray-500 text-center fw-semibold fs-6">
          Já possui cadastro?
          <A href={'/auth/login'} class="link-primary">
            <span></span> Entrar
          </A>
        </div>
      </form>
    </div>
  );
};

export default Register;
