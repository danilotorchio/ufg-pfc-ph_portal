import { Component } from 'solid-js';

const LoadingIndicator: Component = () => {
  return (
    <div class="h-100 w-100 d-flex flex-root flex-column flex-center">
      <span class="spinner-border text-primary h-40px w-40px" role="status"></span>
      <span class="text-muted fs-4 fw-semibold mt-5">Carregando ...</span>
    </div>
  );
};

export default LoadingIndicator;
