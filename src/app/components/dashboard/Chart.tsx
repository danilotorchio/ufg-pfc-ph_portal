import {
  collection,
  DocumentData,
  limit,
  onSnapshot,
  orderBy,
  Query,
  query,
  Unsubscribe,
  where,
} from 'firebase/firestore';

import { createEffect, createSignal, onCleanup, type Component } from 'solid-js';
import { DateTime } from 'luxon';

import { useFirebase } from '../../utils/firebase';
import { chartOptions } from './ChartOptions';

const Chart: Component = () => {
  let element: HTMLDivElement;
  let unsub: Unsubscribe;

  const chart = {
    self: null,
    rendered: false,
  };

  const { auth, db } = useFirebase();

  const [cQuery, setQuery] = createSignal<Query<DocumentData>>(
    query(
      collection(db, `accounts/${auth.currentUser.uid}/data`),
      where('valid', '==', true),
      orderBy('timestamps', 'desc'),
      limit(15)
    )
  );

  const [chartData, setChartData] = createSignal<DocumentData[]>([]);
  const [filterCount, setFilterCount] = createSignal<number>(15);

  function initChart() {
    if (!element) {
      return;
    }

    chart.self = new ApexCharts(
      element,
      chartOptions({
        data: [],
        categories: [],
      })
    );

    chart.self.render();
    chart.rendered = true;
  }

  function updateChart() {
    if (chart.rendered) {
      const data = chartData();

      chart.self.updateOptions({
        series: [
          {
            name: 'Leitura',
            data: data.map((x) => x.value),
          },
          {
            name: 'Temp.',
            data: data.map((x) => x.temp),
          },
        ],
        xaxis: {
          categories: data.map((x) => x.label),
        },
      });
    }
  }

  createEffect(() => {
    if (!chart.rendered) initChart();
    if (!!unsub) unsub();

    unsub = onSnapshot(cQuery(), (snap) => {
      if (snap.empty) return;
      const dataArray = snap.docs.map((doc) => doc.data()).sort((a, b) => a.timestamps - b.timestamps);

      setChartData(
        dataArray.map((data) => {
          const date = DateTime.fromSeconds(data.timestamps);

          return {
            value: data.reading.toFixed(2),
            temp: data.temp.toFixed(1),
            label: `${date.toLocaleString(DateTime.TIME_WITH_SECONDS)}`,
          };
        })
      );

      setTimeout(() => updateChart());
    });
  });

  createEffect(() => {
    const count = filterCount();

    setQuery(
      query(
        collection(db, `accounts/${auth.currentUser.uid}/data`),
        where('valid', '==', true),
        orderBy('timestamps', 'desc'),
        limit(count)
      )
    );
  });

  onCleanup(() => {
    if (!!unsub) unsub();
  });

  return (
    <div class="card card-xl-stretch">
      <div class="card-header border-0 pt-5">
        <h3 class="card-title align-items-start flex-column">
          <span class="card-label fw-bold fs-3 mb-1">Leituras realizadas</span>
          <span class="text-muted fw-semibold fs-7">Mostrando as últimas {filterCount()} leituras em tempo real</span>
        </h3>
        <div class="card-toolbar" data-kt-buttons="true">
          <a
            classList={{ active: filterCount() === 10 }}
            class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1"
            onClick={() => setFilterCount(10)}
          >
            10
          </a>
          <a
            classList={{ active: filterCount() === 15 }}
            class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1"
            onClick={() => setFilterCount(15)}
          >
            15
          </a>
          <a
            classList={{ active: filterCount() === 30 }}
            class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
            onClick={() => setFilterCount(30)}
          >
            30
          </a>
        </div>
      </div>
      <div class="card-body">
        <div ref={element}></div>
      </div>
    </div>
  );
};

export default Chart;
