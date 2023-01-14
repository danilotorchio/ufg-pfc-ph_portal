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

import { useFirebase } from '../../utils/firebase';

const Chart: Component = () => {
  let element: HTMLDivElement;
  let unsub: Unsubscribe;

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

    const chart = {
      self: null,
      rendered: false,
    };

    const _init = () => {
      const labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
      const borderColor = KTUtil.getCssVariableValue('--kt-gray-200');
      const baseColor = KTUtil.getCssVariableValue('--kt-info');
      const lightColor = KTUtil.getCssVariableValue('--kt-info-light');

      const options = {
        series: [
          {
            name: 'Net Profit',
            data: [30, 40, 40, 90, 90, 70, 70],
          },
        ],
        chart: {
          fontFamily: 'inherit',
          type: 'area',
          height: 450,
          toolbar: {
            show: false,
          },
        },
        plotOptions: {},
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: 'solid',
          opacity: 1,
        },
        stroke: {
          curve: 'smooth',
          show: true,
          width: 3,
          colors: [baseColor],
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            style: {
              colors: labelColor,
              fontSize: '12px',
            },
          },
          crosshairs: {
            position: 'front',
            stroke: {
              color: baseColor,
              width: 1,
              dashArray: 3,
            },
          },
          tooltip: {
            enabled: true,
            formatter: undefined,
            offsetY: 0,
            style: {
              fontSize: '12px',
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: labelColor,
              fontSize: '12px',
            },
          },
        },
        states: {
          normal: {
            filter: {
              type: 'none',
              value: 0,
            },
          },
          hover: {
            filter: {
              type: 'none',
              value: 0,
            },
          },
          active: {
            allowMultipleDataPointsSelection: false,
            filter: {
              type: 'none',
              value: 0,
            },
          },
        },
        tooltip: {
          style: {
            fontSize: '12px',
          },
          y: {
            formatter: function (val) {
              return '$' + val + ' thousands';
            },
          },
        },
        colors: [lightColor],
        grid: {
          borderColor: borderColor,
          strokeDashArray: 4,
          yaxis: {
            lines: {
              show: true,
            },
          },
        },
        markers: {
          strokeColor: baseColor,
          strokeWidth: 3,
        },
      };

      chart.self = new ApexCharts(element, options);
      chart.self.render();
      chart.rendered = true;
    };

    // Init chart
    _init();
  }

  createEffect(() => {
    if (!!unsub) unsub();

    console.log('Vou fazer a consulta');
    unsub = onSnapshot(cQuery(), (snap) => {
      console.log('Entrei no snapshot');
      setChartData(
        snap.docs.map((doc) => {
          const data = doc.data();
          const date = new Date(data.timestamps);

          return { ...data, label: `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}` };
        })
      );
      setTimeout(() => initChart());
    });
  });

  onCleanup(() => {
    if (!!unsub) unsub();
  });

  return (
    <>
      <div ref={element}></div>

      <div class="mt-10">{JSON.stringify(chartData())}</div>
    </>
  );
};

export default Chart;
