import { Accessor, createContext, createSignal, ParentComponent, useContext } from 'solid-js';

import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { Auth, getAuth, onAuthStateChanged } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

type FirebaseData = {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
  authenticated: Accessor<boolean>;
  loadingDone: Accessor<boolean>;
};

const FirebaseContext = createContext<FirebaseData>();

export const FirebaseProvider: ParentComponent<{ options: FirebaseOptions }> = (props) => {
  const app = initializeApp(props.options);
  const auth = getAuth(app);
  const db = getFirestore(app);

  const [authenticated, setAuthenticated] = createSignal(false);
  const [loadingDone, setLoadingDone] = createSignal(false);

  onAuthStateChanged(auth, (user) => {
    setAuthenticated(!!user);

    if (!loadingDone()) {
      setLoadingDone(true);
    }
  });

  const value: FirebaseData = { app, auth, db, authenticated, loadingDone };

  // prettier-ignore
  return (
    <FirebaseContext.Provider value={value}>{props.children}</FirebaseContext.Provider>
  );
};

export const useFirebase = () => useContext<FirebaseData>(FirebaseContext);
