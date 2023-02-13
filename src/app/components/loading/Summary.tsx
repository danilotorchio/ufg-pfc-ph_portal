import { Component, createEffect, createSignal } from 'solid-js';
import { collection, doc, limit, onSnapshot, orderBy, query, Unsubscribe, where } from 'firebase/firestore';

import LayerIcon from '../../../assets/media/misc/layer.svg';
import { useFirebase } from '../../utils/firebase';

const Summary: Component = () => {
  let unsub: Unsubscribe;

  const { auth, db } = useFirebase();
  const [lastReading, setLastReading] = createSignal(0.0);

  createEffect(() => {
    if (!!unsub) unsub();

    unsub = onSnapshot(
      query(collection(db, `accounts/${auth.currentUser.uid}/data`), orderBy('timestamps', 'desc'), limit(1)),
      (snap) => {
        if (snap.empty) return;
        const data = snap.docs[0].data();
        setLastReading(data.reading);
      }
    );
  });

  return (
    <div id="kt_app_toolbar" class="app-toolbar py-6">
      <div id="kt_app_toolbar_container" class="app-container container-xxl d-flex align-items-start">
        <div class="d-flex flex-column flex-row-fluid">
          <div class="d-flex flex-stack flex-wrap flex-lg-nowrap gap-4 gap-lg-10 pt-6 pb-18 py-lg-13">
            <div class="page-title d-flex align-items-center me-3">
              <img alt="Logo" src={LayerIcon} class="h-60px me-5" />
              <h1 class="page-heading d-flex text-white fw-bolder fs-2 flex-column justify-content-center my-0">
                pH Station
                <span class="page-desc text-white opacity-50 fs-6 fw-bold pt-4">Leituras de pH realizadas</span>
              </h1>
            </div>
            <div class="d-flex gap-4 gap-lg-13">
              <div class="d-flex flex-column">
                <span class="text-white fw-bold fs-3 mb-1">{lastReading()}</span>
                <div class="text-white opacity-50 fw-bold">Últ. Leitura</div>
              </div>
              <div class="d-flex flex-column">
                <span class="text-white fw-bold fs-3 mb-1">$1,748.03</span>
                <div class="text-white opacity-50 fw-bold">Méd. 24 horas</div>
              </div>
              <div class="d-flex flex-column">
                <span class="text-white fw-bold fs-3 mb-1">3.8%</span>
                <div class="text-white opacity-50 fw-bold">Méd. Semanal</div>
              </div>
              <div class="d-flex flex-column">
                <span class="text-white fw-bold fs-3 mb-1">-7.4%</span>
                <div class="text-white opacity-50 fw-bold">Méd. Mensal</div>
              </div>
              <div class="d-flex flex-column">
                <span class="text-white fw-bold fs-3 mb-1">-7.4%</span>
                <div class="text-white opacity-50 fw-bold">Desvio Padão</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
