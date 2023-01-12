import { Accessor, createContext, createSignal, ParentComponent, useContext } from 'solid-js';

import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { Auth, getAuth, onAuthStateChanged } from 'firebase/auth';

type FirebaseData = {
  app: FirebaseApp;
  auth: Auth;
  authenticated: Accessor<boolean>;
  loadingDone: Accessor<boolean>;
};

const FirebaseContext = createContext<FirebaseData>();

export const FirebaseProvider: ParentComponent<{ options: FirebaseOptions }> = (props) => {
  const app = initializeApp(props.options);
  const auth = getAuth(app);

  const [authenticated, setAuthenticated] = createSignal(false);
  const [loadingDone, setLoadingDone] = createSignal(false);

  onAuthStateChanged(auth, (user) => {
    setAuthenticated(!!user);

    if (!loadingDone()) {
      setLoadingDone(true);
    }
  });

  // prettier-ignore
  return (
    <FirebaseContext.Provider value={{ app, auth, authenticated, loadingDone }}>{props.children}</FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext<FirebaseData>(FirebaseContext);
