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
      where('status', '==', 'valid'),
      orderBy('timestamps', 'asc'),
      limit(15)
    )
  );

  const [chartData, setChartData] = createSignal<DocumentData[]>([]);

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
            data: data.map((x) => x.value),
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
      setChartData(
        snap.docs.map((doc) => {
          const data = doc.data();
          const date = DateTime.fromMillis(data.timestamps);

          return { value: data.reading.toFixed(2), label: `${date.toLocaleString(DateTime.TIME_WITH_SECONDS)}` };
        })
      );

      setTimeout(() => updateChart());
    });
  });

  onCleanup(() => {
    if (!!unsub) unsub();
  });

  return (
    <>
      <div ref={element}></div>
    </>
  );
};

export default Chart;
