import { type Component, lazy, Match, Suspense, Switch, Show } from 'solid-js';
import { useFirebase } from './utils/firebase';

import LoadingIndicator from './components/Loading';

const AppRoutes = lazy(() => import('./routes/AppRoutes'));
const AuthRoutes = lazy(() => import('./routes/AuthRoutes'));

const App: Component = () => {
  const { authenticated, loadingDone } = useFirebase();

  return (
    <Show when={loadingDone()} fallback={<LoadingIndicator />}>
      <Suspense fallback={<LoadingIndicator />}>
        <Switch>
          <Match when={authenticated()}>
            <AppRoutes />
          </Match>
          <Match when={!authenticated()}>
            <AuthRoutes />
          </Match>
        </Switch>
      </Suspense>
    </Show>
  );
};

export default App;
