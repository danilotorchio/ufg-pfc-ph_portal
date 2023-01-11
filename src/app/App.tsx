import { Component, lazy, Match, Suspense, Switch } from 'solid-js';

const AppRoutes = lazy(() => import('./routes/AppRoutes'));
const AuthRoutes = lazy(() => import('./routes/AuthRoutes'));

const hasToken = false;

const App: Component = () => {
  return (
    <Suspense fallback={<span>loading...</span>}>
      <Switch>
        <Match when={hasToken}>
          <AppRoutes />
        </Match>
        <Match when={!hasToken}>
          <AuthRoutes />
        </Match>
      </Switch>
    </Suspense>
  );
};

export default App;
