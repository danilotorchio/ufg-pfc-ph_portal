import { type Component, lazy, Match, Suspense, Switch, Show } from 'solid-js';
import { useFirebase } from './utils/firebase';

const AppRoutes = lazy(() => import('./routes/AppRoutes'));
const AuthRoutes = lazy(() => import('./routes/AuthRoutes'));

const App: Component = () => {
  const { authenticated, loadingDone } = useFirebase();

  return (
    <Show when={loadingDone()} fallback={<span>loading...</span>}>
      <Suspense fallback={<span>loading...</span>}>
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
