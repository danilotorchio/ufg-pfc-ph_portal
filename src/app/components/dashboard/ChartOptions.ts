const labelColor = KTUtil.getCssVariableValue('--kt-gray-500');
const strokeColor = KTUtil.getCssVariableValue('--kt-gray-300');

const color1 = KTUtil.getCssVariableValue('--kt-info');
const color2 = KTUtil.getCssVariableValue('--kt-warning');

const borderColor = KTUtil.getCssVariableValue('--kt-gray-200');

export const chartOptions = ({ data, categories }) => ({
  series: data,
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
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      inverseColors: false,
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [20, 100, 100, 100],
    },
  },
  stroke: {
    curve: 'smooth',
    show: true,
    width: 3,
    colors: [color1, color2],
  },
  xaxis: {
    categories: categories,
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
        color: strokeColor,
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
  yaxis: [
    {
      title: {
        text: 'Leitura (pH)',
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
        formatter: (val: number) => val.toFixed(0),
      },
      min: 0,
      max: 14,
    },
    {
      title: {
        text: 'Temperatura (°C)',
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: '12px',
        },
        formatter: (val: number) => val.toFixed(1),
      },
      opposite: true,
      forceNiceScale: true,
    },
  ],
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
      formatter: function (val: number, { seriesIndex }) {
        if (seriesIndex == 0) return val + ' pH';
        return val + ' °C';
      },
    },
  },
  colors: [color1, color2],
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
    colors: [color1, color2],
    strokeColor: [color1, color2],
    strokeWidth: 3,
  },
});
