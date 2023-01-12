import { Component } from 'solid-js';
import { A } from '@solidjs/router';

const Register: Component = () => {
  return (
    <div class="animate__animated animate__fadeIn">
      <div class="text-gray-500 text-center fw-semibold fs-6">
        Já possui cadastro?
        <A href={'/auth/login'} class="link-primary">
          <span></span> Login
        </A>
      </div>
    </div>
  );
};

export default Register;
